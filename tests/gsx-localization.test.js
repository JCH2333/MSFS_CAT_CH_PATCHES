const assert = require('node:assert/strict')
const crypto = require('node:crypto')
const fs = require('node:fs')
const path = require('node:path')
const test = require('node:test')
const vm = require('node:vm')

const sourcePath = path.join(__dirname, '..', 'packages', 'gsx-pro-zh-cn', 'payload', 'html_ui', 'InGamePanels', 'FSDT_GSX_Panel', 'FSDT_GSX_Panel.js')

function loadTranslator() {
  const source = fs.readFileSync(sourcePath, 'utf8')
  const library = source.slice(0, source.indexOf('// Polyfill for AbortController'))
  const context = { module: { exports: {} }, console }
  vm.runInNewContext(library, context)
  return context.module.exports
}

test('keeps the GSX 4.0.17 panel body verified and free of unsupported external-link injection', () => {
  const source = fs.readFileSync(sourcePath, 'utf8')
  const marker = '// Polyfill for AbortController and AbortSignal if not available'
  const body = source.slice(source.indexOf(marker))
  const hash = crypto.createHash('sha256').update(body).digest('hex')

  assert.match(source, /installGsxChineseObserver/)
  assert.doesNotMatch(source, /addChinesePatchCredit|msfs-cat-ch-credit|space\.bilibili\.com|window\.open/)
  assert.equal(hash, '596c1fb020aeb916411987987e28589cebea41e009d4279c6df897d5cd06cd75')
})

test('translates the reported 4.0.17 main-menu, reposition, SimBrief, and aircraft-status text', () => {
  const translator = loadTranslator()
  const translations = new Map([
    ['GSX MAIN MENU', 'GSX \u4e3b\u83dc\u5355'],
    ['Reposition from Map', '\u4ece\u5730\u56fe\u91cd\u65b0\u5b9a\u4f4d'],
    ['Reposition here [Terminal 3E West Gate 525-536|Gate 530]', '\u5c06\u98de\u673a\u79fb\u81f3\u6b64\u5904 [\u822a\u7ad9\u697c 3E \u897f\u533a \u767b\u673a\u53e3 525-536|\u767b\u673a\u53e3 530]'],
    ['Terminal 3E West Gate 525-536|Gate 530', '\u822a\u7ad9\u697c 3E \u897f\u533a \u767b\u673a\u53e3 525-536|\u767b\u673a\u53e3 530'],
    ['Reload SimBrief', '\u91cd\u65b0\u8f7d\u5165 SimBrief'],
    ["Can't read the aircraft type", '\u65e0\u6cd5\u8bfb\u53d6\u98de\u673a\u7c7b\u578b'],
    ['Loading GSX Menu, please wait...', '\u6b63\u5728\u52a0\u8f7d GSX \u83dc\u5355\uff0c\u8bf7\u7a0d\u5019...']
  ])

  for (const [english, chinese] of translations) {
    assert.equal(translator.translateText(english), chinese, english)
  }
})

test('translates both direct menu rendering and root text-node mutations', () => {
  const source = fs.readFileSync(sourcePath, 'utf8')
  assert.match(source, /if \(root\.nodeType === 3\)/)
  assert.match(source, /const localizedTextLines = textLines\.map\(localizeMenuText\)/)
  assert.match(source, /const title = localizedTextLines\[0\] \|\| ""/)
  assert.match(source, /String\(localizedTextLines\[i\]\)/)
  assert.match(source, /btn\.setAttribute\("title", localizedTextLines\[i\]\)/)
  assert.match(source, /SIMBRIEF_RELOAD_TEXT/)
})

test('uses GSX 4.0.17 while runtime version SimVars are not initialized', () => {
  const source = fs.readFileSync(sourcePath, 'utf8')
  assert.match(source, /GSX_FALLBACK_VERSION\s*=\s*"4\.0\.17"/)
  assert.match(source, /const hasRuntimeVersion = \[major, minor, build\]\.every\(Number\.isFinite\)/)
  assert.match(source, /this\.gsxVersionString = hasRuntimeVersion/)
})

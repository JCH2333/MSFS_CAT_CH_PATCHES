const assert = require('node:assert/strict')
const crypto = require('node:crypto')
const fs = require('node:fs')
const path = require('node:path')
const test = require('node:test')
const vm = require('node:vm')

const sourcePath = path.join(
  __dirname,
  '..',
  'packages',
  'gsx-pro-zh-cn',
  'payload',
  'html_ui',
  'InGamePanels',
  'FSDT_GSX_Panel',
  'FSDT_GSX_Panel.js'
)

function loadTranslator() {
  const source = fs.readFileSync(sourcePath, 'utf8')
  const library = source.slice(0, source.indexOf('// Polyfill for AbortController'))
  const context = { module: { exports: {} }, console }
  vm.runInNewContext(library, context)
  return context.module.exports
}

test('keeps the GSX 4.0.15 official panel body intact and observes dynamic content', () => {
  const source = fs.readFileSync(sourcePath, 'utf8')
  const marker = '// Polyfill for AbortController and AbortSignal if not available'
  const officialBody = source.slice(source.indexOf(marker))
  const hash = crypto.createHash('sha256').update(officialBody).digest('hex')

  assert.match(source, /installGsxChineseObserver/)
  assert.equal(hash, '93246ef7212b7bbf624214e07a387087b1b67e501cee0ed9f75a960c41d62726')
})

test('translates dynamic parking counts with HTML non-breaking spaces', () => {
  const translator = loadTranslator()
  assert.equal(
    translator.translateText('Terminal 1 Gate 103-116 (&nbsp;1 suitable parkings)'),
    '航站楼 1 登机口 103-116（1 个适用停机位）'
  )
})

test('translates dynamic runway start labels while preserving an icon prefix', () => {
  const translator = loadTranslator()
  assert.equal(translator.translateText('\uFFFC Runway 18R Start'), '\uFFFC 跑道 18R 起点')
})

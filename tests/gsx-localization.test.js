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

test('keeps the GSX 4.0.15 panel body free of external-link injection', () => {
  const source = fs.readFileSync(sourcePath, 'utf8')
  const marker = '// Polyfill for AbortController and AbortSignal if not available'
  const officialBody = source.slice(source.indexOf(marker))
  const hash = crypto.createHash('sha256').update(officialBody).digest('hex')

  assert.match(source, /installGsxChineseObserver/)
  assert.doesNotMatch(source, /addChinesePatchCredit|msfs-cat-ch-credit|space\.bilibili\.com|window\.open/)
  assert.equal(hash, '056557b301c9da84efdf1d0dd774ad35dcaa90dfb9ceb72d5c0e804ecdee9490')
})

test('translates the reported GSX loading, SimBrief, aircraft, and saved-position labels', () => {
  const translator = loadTranslator()
  assert.equal(translator.translateText('Loading GSX Menu, please wait...'), '正在加载 GSX 菜单，请稍候...')
  assert.equal(translator.translateText("Can't read the aircraft type"), '无法读取飞机类型')
  assert.equal(translator.translateText('Save current position...'), '保存当前位置...')
  assert.equal(translator.translateText('Reload SimBrief'), '重新载入 SimBrief')
})

test('contains a GSX 4.0.15 version fallback for unavailable runtime SimVars', () => {
  const source = fs.readFileSync(sourcePath, 'utf8')
  assert.match(source, /GSX_FALLBACK_VERSION\s*=\s*"4\.0\.15"/)
  assert.match(source, /this\.gsxVersionString\s*=\s*hasRuntimeVersion/)
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

test('translates the reported live menu labels before they are rendered', () => {
  const translator = loadTranslator()
  const translations = new Map([
    ['GSX MAIN MENU', 'GSX 主菜单'],
    ['Request FollowMe?', '请求引导车？'],
    ['Request Progressive Taxi', '请求渐进式滑行'],
    ['Show me this spot', '带我前往此处'],
    ['Just warp me there', '直接传送到此处'],
    ['Stands Not Edited (28 suitable parkings)', '未编辑的停机位（28 个适用停机位）'],
    ['Runway 23 Start [PLANNED]', '跑道 23 起点 [计划]'],
    ['Interrupt pushback?', '中断推出？'],
    ['Return to parking', '返回停机位'],
    ['Stop here and complete pushback...', '在此停止并完成推出...'],
    ['Stop here and complete pushback procedure', '在此停止并完成推出流程'],
    ['Select pushback direction', '选择推出方向'],
    ['Facing NW on T14 (NL)', '面向西北，位于 T14（NL）'],
    ['QuickEdit Pushback', '快速编辑推出'],
    ['QuickEdit Pushback on Map', '在地图上快速编辑推出'],
    ['Straight Pushback (manual stop, max 100 m)', '直线推出（手动停止，最长 100 米）'],
    ['Straight Pull pushback (manual stop, max 100 m)', '直线拉出（手动停止，最长 100 米）'],
    ['Change parking or service', '更改停机位或服务'],
    ['Change Facility [Runway 23 Start]', '更改位置 [跑道 23 起点]'],
    ['Stop Progressive Taxi', '停止渐进式滑行'],
    ['Moving Map', '移动地图'],
    ['[GSX] In position, please set parking brakes', '[GSX] 已就位，请设置停留刹车']
  ])

  for (const [english, chinese] of translations) {
    assert.equal(translator.translateText(english), chinese, english)
  }

  const source = fs.readFileSync(sourcePath, 'utf8')
  assert.match(source, /const localizedTextLines = textLines\.map\(localizeMenuText\)/)
  assert.match(source, /const title = localizedTextLines\[0\] \|\| ""/)
  assert.match(source, /String\(localizedTextLines\[i\]\)/)
  assert.match(source, /btn\.setAttribute\("title", localizedTextLines\[i\]\)/)
})

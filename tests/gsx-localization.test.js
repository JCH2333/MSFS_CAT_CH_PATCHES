const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const test = require('node:test')
const vm = require('node:vm')

function loadTranslator() {
  const source = fs.readFileSync(path.join(
    __dirname,
    '..',
    'packages',
    'gsx-pro-zh-cn',
    'payload',
    'html_ui',
    'InGamePanels',
    'FSDT_GSX_Panel',
    'FSDT_GSX_Panel.js'
  ), 'utf8')
  const library = source.slice(0, source.indexOf('// Polyfill for AbortController'))
  const context = { module: { exports: {} }, console }
  vm.runInNewContext(library, context)
  return context.module.exports
}

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

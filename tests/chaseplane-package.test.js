const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const test = require('node:test')
const vm = require('node:vm')

const payloadRoot = path.join(__dirname, '..', 'packages', 'chaseplane-zh-cn', 'payload')
const panelPath = path.join(payloadRoot, 'HTML_UI', 'InGamePanels', 'P42ChasePlane')

function loadTranslator() {
  const source = fs.readFileSync(path.join(panelPath, 'ChasePlane.zh-CN.js'), 'utf8')
  const context = { module: { exports: {} } }
  vm.runInNewContext(source, context)
  return context.module.exports.translate
}

test('ChasePlane package loads the localization script and lists changed files in layout.json', () => {
  const htmlPath = path.join(panelPath, 'P42ChasePlane.html')
  const scriptPath = path.join(panelPath, 'ChasePlane.zh-CN.js')
  const layout = JSON.parse(fs.readFileSync(path.join(payloadRoot, 'layout.json'), 'utf8').replace(/^\uFEFF/, ''))
  const htmlEntry = layout.content.find((entry) => entry.path === 'html_ui/ingamepanels/p42chaseplane/p42chaseplane.html')
  const scriptEntry = layout.content.find((entry) => entry.path === 'html_ui/ingamepanels/p42chaseplane/chaseplane.zh-cn.js')

  assert.match(fs.readFileSync(htmlPath, 'utf8'), /src="ChasePlane\.zh-CN\.js"/)
  assert.equal(htmlEntry.size, fs.statSync(htmlPath).size)
  assert.equal(scriptEntry.size, fs.statSync(scriptPath).size)
})

test('ChasePlane translator covers primary dynamic panel labels', () => {
  const translate = loadTranslator()
  assert.equal(translate('Camera Behaviors'), '相机行为')
  assert.equal(translate('Cinematics Mode'), '电影模式')
  assert.equal(translate('Reset Camera Position'), '重置相机位置')
  assert.equal(translate('Assign Control'), '分配控制')
  assert.equal(translate('Unrelated aircraft name'), 'Unrelated aircraft name')
})

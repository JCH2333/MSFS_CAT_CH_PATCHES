const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const test = require('node:test')

const payloadRoot = path.join(
  __dirname,
  '..',
  'packages',
  'fsrealistic-plus-zh-cn',
  'payload'
)

test('FSRealistic package loads the localization script and lists it in layout.json', () => {
  const htmlPath = path.join(payloadRoot, 'html_ui', 'InGamePanels', 'FSRealistic', 'FSRealistic.html')
  const scriptPath = path.join(payloadRoot, 'html_ui', 'InGamePanels', 'FSRealistic', 'FSRealistic.zh-CN.js')
  const layoutPath = path.join(payloadRoot, 'layout.json')
  const html = fs.readFileSync(htmlPath, 'utf8')
  const layout = JSON.parse(fs.readFileSync(layoutPath, 'utf8').replace(/^\uFEFF/, ''))
  const htmlEntry = layout.content.find((entry) => entry.path === 'html_ui/InGamePanels/FSRealistic/FSRealistic.html')
  const scriptEntry = layout.content.find((entry) => entry.path === 'html_ui/InGamePanels/FSRealistic/FSRealistic.zh-CN.js')

  assert.match(html, /<script type="text\/javascript" src="FSRealistic\.zh-CN\.js"><\/script>/)
  assert.ok(fs.statSync(scriptPath).isFile())
  assert.equal(htmlEntry.size, fs.statSync(htmlPath).size)
  assert.equal(scriptEntry.size, fs.statSync(scriptPath).size)
})

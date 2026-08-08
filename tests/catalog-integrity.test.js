const assert = require('node:assert/strict')
const crypto = require('node:crypto')
const fs = require('node:fs')
const path = require('node:path')
const test = require('node:test')

function hash(filePath) {
  return crypto.createHash('sha256').update(fs.readFileSync(filePath)).digest('hex')
}

test('catalog fingerprints match the Patch Package source files', () => {
  const catalog = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'manifest.json'), 'utf8'))

  for (const patch of catalog.patches) {
    for (const file of patch.fingerprint || []) {
      const sourcePath = path.join(__dirname, '..', 'packages', patch.id, 'payload', ...file.relativePath.split('/'))
      assert.equal(hash(sourcePath), file.sha256, `${patch.id}: ${file.relativePath}`)
    }
  }
})

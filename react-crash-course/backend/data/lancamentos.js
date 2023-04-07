const fs = require('node:fs/promises')

async function getStoredLancamentos() {
  const rawFileContent = await fs.readFile('Lancamentos.json', { encoding: 'utf-8' })
  const data = JSON.parse(rawFileContent)
  const storedLancamentos = data.Lancamentos ?? []
  return storedLancamentos
}

function storeLancamentos(Lancamentos) {
  return fs.writeFile('Lancamentos.json', JSON.stringify({ Lancamentos: Lancamentos || [] }))
}

exports.getStoredLancamentos = getStoredLancamentos
exports.storeLancamentos = storeLancamentos

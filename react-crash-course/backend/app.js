const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')

const { getStoredLancamentos, storeLancamentos } = require('./data/lancamentos')

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use((req, res, next) => {
  // Attach CORS headers
  // Required when using a detached backend (that runs on a different domain)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.get('/lancamentos', async (req, res) => {
  const storedLancamentos = await getStoredLancamentos()
  // await new Promise((resolve, reject) => setTimeout(() => resolve(), 1500));
  res.json({ lancamentos: storedLancamentos })
})

app.get('/lancamentos/:id', async (req, res) => {
  const storedLancamentos = await getStoredLancamentos()
  const lancamento = storedLancamentos.find(lancamento => lancamento.id === req.params.id)
  res.json({ lancamento })
})

app.delete('/lancamentos/:id', async (req, res) => {
  const storedLancamentos = await getStoredLancamentos()
  const lancamentoId = storedLancamentos.findIndex(lancamento => lancamento.id === req.params.id)

  if (lancamentoId === -1) {
    return res.status(404).json({ message: 'Lançamento não encontrado.' })
  }

  storedLancamentos.splice(lancamentoId, 1)
  await storeLancamentos(storedLancamentos)
  res.status(200).json({ message: 'Lançamento removido com sucesso.' })
})

app.post('/lancamentos', async (req, res) => {
  const existingLancamentos = await getStoredLancamentos()
  const lancamentosData = req.body
  const novoLancamento = {
    ...lancamentosData,
    id: Math.random().toString()
  }
  const updatedLancamentos = [novoLancamento, ...existingLancamentos]
  await storeLancamentos(updatedLancamentos)
  res.status(201).json({ message: 'Novo lançamento armazenado.', lancamento: novoLancamento })
})

app.listen(8080)

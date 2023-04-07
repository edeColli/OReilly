import { useState } from 'react'

import { Link, Form, redirect } from 'react-router-dom'
import Modal from '../components/Modal'

import classes from './NovoLancamento.module.css'
import TipoSelecao from '../components/TipoSelecao'

function NovoLancamento({ onCancel, onAddPost, onAtualizaSaldo }) {
  const [descricao, setDescricao] = useState('')
  const [date, setDate] = useState(new Date().toLocaleDateString('pt-BR'))
  const [valor, setValor] = useState('')
  const [tipo, setTipo] = useState('')

  const dateChangeHandler = event => {
    setDate(event.target.value)
  }

  function tipoChangeHandler(event) {
    setTipo(event.target.value)
  }

  function descricaoChangeHandler(event) {
    setDescricao(event.target.value)
  }

  const valorChangeHandler = event => {
    setValor(event.target.value)
  }

  function atualizaSaldoHandler(tipo, valor) {
    onAtualizaSaldo(tipo, valor)
  }

  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <TipoSelecao id="tipo" name="tipo" required onChange={tipoChangeHandler} />
        </p>
        <p>
          <label htmlFor="data">Data do lançamento</label>
          <input type="date" id="data" name="data" value={date} onChange={dateChangeHandler} required />
        </p>
        <p>
          <label htmlFor="name">Descrição</label>
          <input type="text" id="descricao" name="descricao" required onChange={descricaoChangeHandler} />
        </p>
        <p>
          <label htmlFor="name">Valor</label>
          <input
            type="text"
            id="valor"
            name="valor"
            required
            placeholder="R$ 0,00"
            inputMode="numeric"
            value={valor}
            onChange={valorChangeHandler}
          />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancelar
          </Link>
          <button>Confirmar</button>
        </p>
      </Form>
    </Modal>
  )
}

export default NovoLancamento

export async function action({ request }, { atualizaSaldoHandler }) {
  const formData = await request.formData()

  const postData = Object.fromEntries(formData) // { tipo: '...', data: '...', valor: '...', descricao: '...' }
  await fetch('http://localhost:8080/lancamentos', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(() => {
    atualizaSaldoHandler(postData.tipo, postData.valor)
  })

  return redirect('/')
}

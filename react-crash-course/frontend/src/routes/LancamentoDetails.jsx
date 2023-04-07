import { useLoaderData, Link } from 'react-router-dom'

import Modal from '../components/Modal'
import classes from './LancamentoDetails.module.css'

function LancamentoDetails(props) {
  const lancamento = useLoaderData()
  const options = { day: 'numeric', month: 'numeric', year: 'numeric' }
  const dataFormatada = new Date(lancamento.data).toLocaleDateString('pt-BR', options)

  function onCloseHandler() {
    props.onClose()
  }

  function onDeleteHandler() {
    props.onDelete(lancamento.id)
  }

  if (!lancamento) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Não foi possivel localizar nenhum lançamento</h1>
          <p>Infelizmente, o lançamento solicitada não pôde ser encontrada..</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    )
  }
  return (
    <Modal>
      <main className={classes.details}>
        {/* <p className={classes.id}>{lancamento.id}</p> */}
        <p className={classes.tipo}>{lancamento.tipo}</p>
        <p className={classes.data}>{dataFormatada}</p>
        <p className={classes.valor}>{'R$ ' + parseFloat(lancamento.valor).toFixed(2)}</p>
        <p className={classes.descricao}>{lancamento.descricao}</p>
        <p>
          <button className={classes.button} onClick={onCloseHandler}>
            Voltar
          </button>
          <button className={classes.button} onClick={onDeleteHandler}>
            Remover
          </button>
        </p>
      </main>
    </Modal>
  )
}

export default LancamentoDetails

export async function loader({ params }) {
  const response = await fetch('http://localhost:8080/lancamentos/' + params.lancamentoId)
  const resData = await response.json()
  return resData.lancamento
}

export async function deleteLancamento({ params }) {
  const response = await fetch('http://localhost:8080/lancamentos/' + params.lancamentoId)
  const resData = await response.json()
  return resData.lancamento
}

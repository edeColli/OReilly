import { useLoaderData, Link } from 'react-router-dom'
import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa'
import { useState } from 'react'
import Modal from './Modal'
import classes from './LancamentosList.module.css'
import Lancamento from './Lancamento'

import NovoLancamento from '../routes/NovoLancamento'

function LancamenetosList({ isPosting, onStopPosting, onAtualizaSaldo }) {
  const lancamentos = useLoaderData()

  //const [lancamentos, setLancamentos] = useState([])

  // function addPostHandler(postData) {
  //   setLancamentos(existingPosts => [postData, ...lancamentos])
  //   //onAtualizaSaldo(postData.tipo, postData.valor)
  // }

  const iconeReceita = <FaPlusSquare />
  const iconeDespesa = <FaMinusSquare />

  function onAtualizaSaldo(tipo, valor) {
    console.log(tipo, valor)
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NovoLancamento onCancel={onStopPosting} onAtualizaSaldo={onAtualizaSaldo}></NovoLancamento>
        </Modal>
      )}
      {lancamentos.length > 0 && (
        <ul className={classes.posts}>
          {lancamentos.map(lancamento => {
            return (
              <Lancamento
                key={lancamento.id}
                id={lancamento.id}
                tipo={lancamento.tipo === 'receita' ? iconeReceita : iconeDespesa}
                data={lancamento.data}
                descricao={lancamento.descricao}
                valor={'R$ ' + parseFloat(lancamento.valor).toFixed(2)}
                onDelete={() => {
                  deleteLancamentoHandler(lancamento.id)
                  //passa o tipo invertido para atualizar o saldo de forma inversa
                  onAtualizaSaldo(lancamento.tipo === 'receita' ? 'despesa' : 'receita', lancamento.valor)
                }}
              ></Lancamento>
            )
          })}
        </ul>
      )}
      {lancamentos.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>Ainda não há lançamentos neste dia!</h2>
          <p>Comece adicionando algum.</p>
        </div>
      )}
    </>
  )
}

export default LancamenetosList

import { useState } from 'react'

import LancamentosList from './components/LancamentosList'
import MainHeader from './components/MainHeader'

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [saldo, setSaldo] = useState(0)

  function showModalHandler() {
    setModalIsVisible(true)
  }
  function hideModalHandler() {
    setModalIsVisible(false)
  }

  // function atualizaSaldoHandler(tipo, valor) {
  //   console.log('atualizando saldo...')
  //   if (tipo === 'receita') {
  //     setSaldo(saldo + parseFloat(valor))
  //   } else {
  //     setSaldo(saldo - parseFloat(valor))
  //   }
  // }

  return (
    <>
      <MainHeader saldo={saldo} onAtualizaSaldo={atualizaSaldoHandler} onCreatePost={showModalHandler}></MainHeader>
      <main>
        <LancamentosList
          isPosting={modalIsVisible}
          onStopPosting={hideModalHandler}
          //onAtualizaSaldo={atualizaSaldoHandler}
        ></LancamentosList>
      </main>
    </>
  )
}

export default App

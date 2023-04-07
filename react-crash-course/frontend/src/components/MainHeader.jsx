import { Link } from 'react-router-dom'
import { MdPostAdd, MdAccountBalance } from 'react-icons/md'
import { GiMoneyStack } from 'react-icons/gi'

import classes from './MainHeader.module.css'

function atualizaSaldoHandler(tipo, valor) {
  console.log('atualizando saldo...')
  if (tipo === 'receita') {
    setSaldo(saldo + parseFloat(valor))
  } else {
    setSaldo(saldo - parseFloat(valor))
  }
}

function MainHeader(props) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdAccountBalance />
        Planejamento Familiar
      </h1>
      <h2 className={classes.saldo}>
        <GiMoneyStack />
        <div>R$ {parseFloat(props.saldo).toFixed(2)}</div>
      </h2>
      <p>
        <Link to="/create-post" className={classes.button}>
          <MdPostAdd size={18} />
          Novo Lançamento
        </Link>
      </p>
    </header>
  )
}

export default MainHeader

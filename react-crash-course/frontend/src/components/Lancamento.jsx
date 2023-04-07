import { Link } from 'react-router-dom'

import classes from './Lancamento.module.css'

function Lancamento(props) {
  const options = { day: 'numeric', month: 'numeric', year: 'numeric' }
  const dataFormatada = new Date(props.data).toLocaleDateString('pt-BR', options)

  return (
    <li className={classes.lancamento}>
      <Link to={props.id}>
        <p className={classes.tipo}>{props.tipo}</p>
        <p className={classes.data}>{dataFormatada}</p>
        <p className={classes.valor}>{props.valor}</p>
        <p className={classes.descricao}>{props.descricao}</p>
      </Link>
    </li>
  )
}

export default Lancamento

import React, { useReducer } from 'react'

const initialState = { count: 0 }

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <p>Contagem: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Adicionar 1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Subtrair 1</button>
    </div>
  )
}

// Nesse exemplo, a função Counter é um componente React que usa o hook useReducer para gerenciar um estado de contagem
// mais complexo.
// O estado inicial é definido como um objeto com a propriedade 'count' igual a 0 e a função reducer é usada para
// manipular o estado com base em ações recebidas.
// A função 'dispatch' é usada para enviar as ações para o reducer e atualizar o estado com base na ação recebida.

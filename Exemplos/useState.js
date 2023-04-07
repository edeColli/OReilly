import React, { useState } from 'react'

function Counter() {
  // Define a variável 'count' e a função 'setCount' como estado inicial 0
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Contagem: {count}</p>
      <button onClick={() => setCount(count + 1)}>Adicionar 1</button>
    </div>
  )
}

// Nesse exemplo, a função Counter é um componente React que usa o hook useState para adicionar um estado interno de contagem.
// A variável 'count' é definida como o valor inicial de 0 e a função 'setCount' é usada para atualizar o valor da variável
//'count' sempre que o botão é clicado.

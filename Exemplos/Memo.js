import React, { useState } from 'react'

const MemoizedChild = React.memo(function Child(props) {
  console.log('Renderização do Child')
  return <p>{props.value}</p>
})

function Parent() {
  const [value, setValue] = useState(0)

  const handleClick = () => {
    setValue(value + 1)
  }

  return (
    <div>
      <h1>Parent</h1>
      <button onClick={handleClick}>Clique aqui</button>
      <MemoizedChild value={value} />
    </div>
  )
}

//Nesse exemplo, a função MemoizedChild é um componente React que é envolvido no React.memo para evitar renderizações
// desnecessárias.
// Quando as propriedades do componente não mudam, ele é mantido em cache e não é renderizado novamente.
// O console.log no componente é usado apenas para ilustrar que o componente só é renderizado quando as propriedades mudam.
// A função Parent é um componente React que possui um estado interno de valor, que é atualizado quando o botão é clicado.
// O MemoizedChild é renderizado dentro do componente Parent e recebe o valor do estado interno como uma propriedade.
// Quando o valor é atualizado, apenas o componente MemoizedChild é renderizado novamente, porque seu valor mudou.
// O componente Parent não é renderizado novamente, porque não há necessidade.
// Isso pode ajudar a melhorar o desempenho e a experiência do usuário ao evitar renderizações desnecessárias.

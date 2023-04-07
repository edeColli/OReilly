import React, { useContext } from 'react'

const MyContext = React.createContext('default')

function Component() {
  return (
    <MyContext.Provider value="Hello World">
      <ChildComponent />
    </MyContext.Provider>
  )
}

function ChildComponent() {
  const value = useContext(MyContext)
  return <p>{value}</p>
}

// Nesse exemplo, a função Component é um componente React que usa o hook useContext para compartilhar um valor
// entre componentes sem a necessidade de passar dados por meio de props. O objeto MyContext é criado com o valor
// padrão 'default' e a função Component define o contexto com o valor 'Hello World'.
// Em seguida, o componente ChildComponent usa o useContext para acessar o valor do contexto e exibi-lo em uma tag <p>.

import React, { useState, useEffect } from 'react'

function DataFetcher() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/data')
      const data = await response.json()
      setData(data)
    }
    fetchData()
  }, [])

  return (
    <div>
      {data ? (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Carregando dados...</p>
      )}
    </div>
  )
}

// Nesse exemplo, a função DataFetcher é um componente React que usa o hook useEffect para buscar dados de uma API externa.
// Quando o componente é montado, a função passada como primeiro argumento do useEffect é executada, nesse caso,
// a função assíncrona fetchData. Depois que os dados são buscados e transformados em JSON, a função setData
// atualiza o estado do componente com o novo valor. O segundo argumento do useEffect é um array vazio,
// o que significa que o efeito só será executado uma vez, quando o componente for montado.
// O componente renderiza uma lista de itens caso os dados tenham sido carregados com sucesso, ou exibe uma mensagem de
// "Carregando dados..." caso ainda estejam sendo buscados.

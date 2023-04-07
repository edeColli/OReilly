import React, { useState } from 'react'

function TipoSelecao() {
  const [selectedOption, setSelectedOption] = useState('option')

  const optionChangeHandler = event => {
    setSelectedOption(event.target.value)
  }

  return (
    <label>
      Selecione a opção:
      <select name="tipo" value={selectedOption} onChange={optionChangeHandler}>
        <option value="option">Selecione...</option>
        <option value="despesa">Despesa</option>
        <option value="receita">Receita</option>
      </select>
    </label>
  )
}

export default TipoSelecao

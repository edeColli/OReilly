import { Outlet } from 'react-router-dom'

import LancamentosList from '../components/LancamentosList'

function Lancamentos() {
  return (
    <>
      <Outlet />
      <main>
        <LancamentosList />
      </main>
    </>
  )
}

export default Lancamentos

export async function loader() {
  const response = await fetch('http://localhost:8080/lancamentos')
  const resData = await response.json()
  return resData.lancamentos
}

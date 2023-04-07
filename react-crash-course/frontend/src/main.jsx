import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Lancamentos, { loader as lancamentosLoader } from './routes/Lancamentos'
import NovoLancamento, { action as newLancamentoAction } from './routes/NovoLancamento'
import LancamentoDetails, {
  loader as lancamentoDetailsLoader,
  deleteLancamento as LancamentoDetailDelete
} from './routes/LancamentoDetails'
import RootLayout from './routes/RootLayout'
import './index.css'

async function onDeleteLancamento(lancamentoId) {
  try {
    await fetch(`http://localhost:8080/lancamentos/${lancamentoId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    // atualiza a lista de lançamentos após a exclusão
    // e atualiza o saldo
  } catch (error) {
    console.error(error)
  }
}

function atualizaSaldoHandler() {
  console.log('atualizando saldo...')
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Lancamentos />,
        loader: lancamentosLoader,
        children: [
          {
            path: 'create-post',
            element: <NovoLancamento onAtualizaSaldo={atualizaSaldoHandler} />,
            action: newLancamentoAction
          },
          {
            path: ':lancamentoId',
            element: <LancamentoDetails onDelete={onDeleteLancamento} />,
            loader: lancamentoDetailsLoader
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

import UserFinder from './components/UserFinder'
import UsersContext from './store/users-context'

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
  { id: 'u4', name: 'Adam' },
  { id: 'u5', name: 'Beatrice' },
  { id: 'u6', name: 'Carlos' },
  { id: 'u7', name: 'Ed' },
  { id: 'u8', name: 'Kelly' }
]

function App() {
  const usersContext = {
    users: DUMMY_USERS
  }

  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  )
}

export default App

import { initStore } from './store'

function configureStore() {
  const actions = {
    ADD: (state, amount) => ({ counter: state.counter + amount }),
    SUB: (state, amount) => ({ counter: state.counter - amount })
  }

  initStore(actions, { counter: 0 })
}

export default configureStore

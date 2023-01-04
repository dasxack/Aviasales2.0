/* eslint-disable react/react-in-jsx-scope */
import { createRoot } from 'react-dom/client'
import { createStore, applyMiddleware, compose } from 'redux'
import App from './componets/app'
import { rootReducer } from './redux/rootReducer'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
// const composeEnhancers =
//   typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose

// const loggerMiddleware = (store) => (next) => (action) => {
//   const result = next(action)
//   console.log('Middleware', store.getState())
//   return result
// }
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  // eslint-disable-next-line react/react-in-jsx-scope
  <Provider store={store}>
    <App />
  </Provider>
)

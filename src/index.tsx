import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { store } from './store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import App from './components/App'
import { ThemeProvider } from '@material-ui/core'
import theme from './theme'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

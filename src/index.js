import React from 'react'
import ReactDOM from 'react-dom'
import App from './container/App'

import sum from './sum.js'
import './styles/style.sass'
console.log(sum(2, 5))
ReactDOM.render(
    <App />,
    document.getElementById('app')
)

module.hot.accept()
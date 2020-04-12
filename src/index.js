import React from 'react'
import ReactDOM from 'react-dom'
import App from './container/App'

import './styles/style.sass'

ReactDOM.render(
    <App />,
    document.getElementById('app')
)

module.hot.accept()
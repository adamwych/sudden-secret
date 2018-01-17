/**
 * This file is part of the Sudden Secret web application.
 * Full license text can be found in LICENSE file in the root directory.
 */

// This file is responsible for bootstraping everything.
// It establishes connection with the server and renders the application.

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import store from './state/store'
import SocketIOClient from './lib/Socket'

let ioClient = SocketIOClient.current = new SocketIOClient()
{
    ioClient.connect()
    ioClient.onConnected(() => store.dispatch({ type: 'SERVER_CONNECTION_ESTABLISHED' }))
    ioClient.onDisconnected(() => store.dispatch({ type: 'SERVER_CONNECTION_LOST' }))
}

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('app'))

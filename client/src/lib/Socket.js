/**
 * This file is part of the Sudden Secret web application.
 * Full license text can be found in LICENSE file in the root directory.
 */
import io from 'socket.io-client'
import store from 'state/store'
import config from '../config'

export default class SocketIOClient {
    static current = null
    connection = null

    connect() {
        this.connection = io(`${config.serverHostname}:${config.serverPort}`)
        this.connection.on('message', message => {
            store.dispatch({
                type: 'NEW_MESSAGE',
                message
            })
        })
    }

    sendMessage(message) {
        this.connection.emit('message', message)
    }

    onConnected(handler) {
        this.connection.on('connect', handler)
    }

    onDisconnected(handler) {
        this.connection.on('disconnect', handler)
        this.connection.on('connect_error', handler)
    }
}

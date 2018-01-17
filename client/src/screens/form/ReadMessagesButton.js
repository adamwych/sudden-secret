/**
 * This file is part of the Sudden Secret web application.
 * Full license text can be found in LICENSE file in the root directory.
 */
import React from 'react'
import store from 'state/store'
import MessagesScreen from 'screens/MessagesScreen'

export default class ReadMessagesButton extends React.Component {
    render() {
        return (
            <div className="button button-gray" onClick={this.handleClick}>
                Read messages from other people
            </div>
        )
    }

    handleClick = e => {
        store.dispatch({
            type: 'UI_CHANGE_SCREEN',
            newScreen: MessagesScreen
        })
    }
}

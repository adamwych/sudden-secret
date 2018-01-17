/**
 * This file is part of the Sudden Secret web application.
 * Full license text can be found in LICENSE file in the root directory.
 */
import React from 'react'
import ReadMessagesButton from 'screens/form/ReadMessagesButton'

export default class MessageSentCard extends React.Component {
    render() {
        return (
            <div className="secret-sent-card" style={this.props.style}>
                <div className="text">Your message has been sent.</div>
                <ReadMessagesButton />
            </div>
        )
    }
}

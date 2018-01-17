/**
 * This file is part of the Sudden Secret web application.
 * Full license text can be found in LICENSE file in the root directory.
 */
import React from 'react'

export default class Loader extends React.Component {
    render() {
        return (
            <div className="loading-messages">
                <i className="fa fa-spin fa-circle-o-notch"></i><br />
                <div className="text-bright">Waiting for messages...</div>
            </div>
        )
    }
}

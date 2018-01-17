/**
 * This file is part of the Sudden Secret web application.
 * Full license text can be found in LICENSE file in the root directory.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ScreenContainer from 'screens/ScreenContainer'

/**
 * Root component of the application.
 */
class App extends React.Component {
    static propTypes = {
        isConnected: PropTypes.bool
    }

    static defaultProps = {
        isConnected: false
    }

    render() {
        return (
            <div className="suddensecret-app">
                <div className="container">
                    <div className="app-body">
                        { this.props.isConnected === false ?
                            this.renderConnectionLostMessage()
                        : ''}

                        <ScreenContainer />
                    </div>
                </div>
            </div>
        )
    }

    renderConnectionLostMessage() {
        return (
            <div className="no-connection-message">
                <div>
                    <i className="fa fa-spin fa-refresh" /><br />
                    <h1>Connection lost.</h1>
                    <h3>Please wait...</h3>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isConnected: state.connected
    }
}

export default connect(mapStateToProps)(App)

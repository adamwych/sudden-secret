/**
 * This file is part of the Sudden Secret web application.
 * Full license text can be found in LICENSE file in the root directory.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import store from 'state/store'
import Loader from 'screens/message/Loader'
import NextMessageButton from 'screens/message/NextMessageButton'

class MessagesScreen extends React.Component {
    static propTypes = {
        messages: PropTypes.object
    }

    static defaultProps = {
        messages: []
    }

    state = {
        currentMessageIndex: -1,
        message: null
    }

    componentWillReceiveProps(props) {
        if (this.state.message === null && props.messages) {
            this.setState({
                currentMessageIndex: 0,
                message: props.messages[0]
            })
        }
    }

    render() {
        return (
            <div className="message-screen">
                <div className="message">
                    <div className="clearfix">
                        {this.renderMessageOrLoader()}
                    </div>
                </div>
            </div>
        )
    }

    renderMessageOrLoader() {
        if (this.props.messages.length === 0 || this.state.message === null) {
            return (
                <Loader />
            )
        }

        return (
            <div>
                <div className="text-bright text-huge">{this.state.currentMessageIndex + 1}</div>

                <span>
                    {this.state.message.text}
                </span>

                <NextMessageButton
                    disabled={this.props.messages.length - 1 <= this.state.currentMessageIndex}
                    onClick={this.handleNextMessageButtonClick}
                />
            </div>
        )
    }

    handleNextMessageButtonClick = e => {
        // Do nothing if there are no more messages.
        if (this.props.messages.length - 1 <= this.state.currentMessageIndex) {
            return
        }

        let nextMessageIndex = this.state.currentMessageIndex + 1
        this.setState({
            currentMessageIndex: nextMessageIndex,
            message: this.props.messages[nextMessageIndex]
        })
    }
}

const mapStateToProps = state => {
    return {
        messages: state.messages
    }
}

export default connect(mapStateToProps)(MessagesScreen)

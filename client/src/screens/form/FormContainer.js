/**
 * This file is part of the Sudden Secret web application.
 * Full license text can be found in LICENSE file in the root directory.
 */
import React from 'react'
import { Motion, spring } from 'react-motion'

import Form from 'screens/form/Form'
import MessageSentCard from 'screens/form/MessageSentCard'

export default class FormContainer extends React.Component {
    state = {
        playExitAnimation: false
    }

    render() {
        const [defaultMotionStyle, targetMotionStyle] = this.createMotionStyles()

        return (
            <Motion key={Math.random()} defaultStyle={defaultMotionStyle} style={targetMotionStyle}>
                {interpolatingStyle => this.renderBody(interpolatingStyle)}
            </Motion>
        )
    }

    renderBody(interpolatingStyle) {
        const messageStyle = {
            transform: `scale(${1 - interpolatingStyle.scale})`
        }

        const formStyle = {
            transform: `scale(${interpolatingStyle.scale})`
        }

        return (
            <div className="fluid">
                <MessageSentCard style={messageStyle} />
                <Form style={formStyle} onSubmit={this.handleFormSubmit} />
            </div>
        )
    }

    createMotionStyles() {
        if (this.state.playExitAnimation) {
            return [
                {
                    scale: 1
                },

                {
                    scale: spring(0, {stiffness: 230, damping: 18})
                }
            ]
        }

        return [{scale: 1}, {scale: 1}]
    }

    handleFormSubmit = e => {
        this.setState({
            playExitAnimation: true
        })
    }
}

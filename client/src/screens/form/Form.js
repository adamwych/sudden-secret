/**
 * This file is part of the Sudden Secret web application.
 * Full license text can be found in LICENSE file in the root directory.
 */
import React from 'react'
import { connect } from 'react-redux'
import SocketIOClient from 'lib/Socket'

import FormTextarea from 'screens/form/FormTextarea'
import FormCharacterCounter from 'screens/form/FormCharacterCounter'
import FormSendButton from 'screens/form/FormSendButton'

class Form extends React.Component {
    render() {
        return (
            <form className="form homepage-form clearfix" style={this.props.style} onSubmit={this.handleSubmit}>
                <FormTextarea />

                <div className="align-left">
                    <FormCharacterCounter />
                </div>

                <div className="align-right">
                    <FormSendButton />
                </div>
            </form>
        )
    }

    handleSubmit = e => {
        e.preventDefault()

        if (!this.props.isFormValid) {
            return
        }

        SocketIOClient.current.sendMessage({
            text: this.props.textareaValue
        })

        this.props.onSubmit()
    }
}

const mapStateToProps = state => {
    return {
        isFormValid: state.form.valid,
        textareaValue: state.form.value
    }
}

export default connect(mapStateToProps)(Form)

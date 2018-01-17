/**
 * This file is part of the Sudden Secret web application.
 * Full license text can be found in LICENSE file in the root directory.
 */
import React from 'react'
import { connect } from 'react-redux'

import validateFormInput from 'lib/Validator'
import store from 'state/store'

class FormTextarea extends React.Component {
    ref = null

    componentDidMount() {
        this.ref.focus()
    }

    render() {
        return (
            <textarea
                ref={r => this.ref = r}
                className="form-control"
                rows="4"
                placeholder="Write something that no one knows about you."
                onChange={this.handleChange}
                value={this.props.value} />
        )
    }

    handleChange = e => {
        store.dispatch({
            type: 'SECRET_FORM_TEXTAREA_UPDATE',
            value: e.target.value,
            isValid: this.validate(e.target.value)
        })
    }

    validate(value) {
        return validateFormInput(
            value, 'required|maxLength:400'
        )
    }
}

const mapStateToProps = state => {
    return {
        value: state.form.value
    }
}

export default connect(mapStateToProps)(FormTextarea)

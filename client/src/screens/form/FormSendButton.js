/**
 * This file is part of the Sudden Secret web application.
 * Full license text can be found in LICENSE file in the root directory.
 */
import React from 'react'
import { connect } from 'react-redux'

class FormSendButton extends React.Component {
    render() {
        let validClass = this.props.isFormValid ? '' : 'disabled'

        return (
            <button className={`form-control button button-blue ${validClass}`} type="submit">
                <div className="button-icon">
                    <i className="fa fa-send"></i>
                </div>
                <span className="button-caption">Share</span>
            </button>
        )
    }
}

const mapStateToProps = state => {
    return {
        isFormValid: state.form.valid
    }
}

export default connect(mapStateToProps)(FormSendButton)

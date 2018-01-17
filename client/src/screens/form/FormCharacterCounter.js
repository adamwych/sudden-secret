/**
 * This file is part of the Sudden Secret web application.
 * Full license text can be found in LICENSE file in the root directory.
 */
import React from 'react'
import { connect } from 'react-redux'

class FormCharacterCounter extends React.Component {
    render() {
        return (
            <div className="text-bright text-length-counter">
                {this.props.length} / 400 characters
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        length: state.form.value.length
    }
}

export default connect(mapStateToProps)(FormCharacterCounter)

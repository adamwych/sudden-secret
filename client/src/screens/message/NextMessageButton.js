/**
 * This file is part of the Sudden Secret web application.
 * Full license text can be found in LICENSE file in the root directory.
 */
import React from 'react'
import PropTypes from 'prop-types'

export default class NextMessageButton extends React.Component {
    static propTypes = {
        onClick: PropTypes.func,
        disabled: PropTypes.bool
    }

    static defaultProps = {
        onClick: () => {},
        disabled: false
    }

    render() {
        return (
            <div className={`button button-blue ${this.props.disabled ? 'disabled' : ''} display-inline-block align-right `} onClick={this.props.onClick}>
                Next message
            </div>
        )
    }
}

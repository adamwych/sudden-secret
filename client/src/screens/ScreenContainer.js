/**
 * This file is part of the Sudden Secret web application.
 * Full license text can be found in LICENSE file in the root directory.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import FormScreen from 'screens/FormScreen'

class ScreenContainer extends React.Component {
    static propTypes = {
        screen: PropTypes.object
    }

    render() {
        const Screen = (this.props.screen || FormScreen)
        return (
            <Screen />
        )
    }
}

const mapStateToProps = state => {
    return {
        screen: state.screen
    }
}

export default connect(mapStateToProps)(ScreenContainer)

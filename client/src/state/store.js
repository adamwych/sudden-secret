/**
 * This file is part of the Sudden Secret web application.
 * Full license text can be found in LICENSE file in the root directory.
 */
import { createStore } from 'redux'
import { cloneDeep } from 'lodash'

const initialState = {
    form: {
        value: '',
        valid: false
    },
    screen: null,
    connected: true,
    messages: []
}

const addMessage = (state, action) => {
    let newState = cloneDeep(state)
    newState.messages.push(action.message)
    return newState
}

const updateSecretFormValue = (state, action) => {
    let newState = cloneDeep(state)

    newState.form.value = action.value
    newState.form.valid = action.isValid

    return newState
}

const updateScreen = (state, action) => {
    return { ...state, screen: action.newScreen }
}

const connectionEstablished = (state, action) => {
    return { ...state, connected: true }
}

const connectionLost = (state, action) => {
    return { ...state, connected: false }
}

export default createStore((state = initialState, action) => {
    switch (action.type) {
        case 'NEW_MESSAGE':
            return addMessage(state, action)

        case 'SECRET_FORM_TEXTAREA_UPDATE':
            return updateSecretFormValue(state, action)

        case 'UI_CHANGE_SCREEN':
            return updateScreen(state, action)

        case 'SERVER_CONNECTION_ESTABLISHED':
            return connectionEstablished(state, action)

        case 'SERVER_CONNECTION_LOST':
            return connectionLost(state, action)
    }

    return state
})

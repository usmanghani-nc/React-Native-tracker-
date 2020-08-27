import { AsyncStorage } from 'react-native'
import { navigate } from '../navigationRef'
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker'

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case 'signup':
            return { errorMessage: '', token: action.payload }
        default:
            return state
    }
}

const signup = dispatch => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signup', { email, password })
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({ type: 'signup', payload: response.data.token })
            navigate('trackList')

        } catch (error) {
            dispatch({ type: 'add_error', payload: 'Something went wrong with sign up.' })
        }
    }
}

const signin = dispatch => {
    return async ({ email, password }) => {

    }
}

const signout = dispatch => {
    return async () => {

    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout },
    { token: null, errorMessage: '' }
)

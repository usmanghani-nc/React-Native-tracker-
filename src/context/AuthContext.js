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
        case 'signin':
            return { errorMessage: '', token: action.payload }
        case 'clear_error_message':
            return { errorMessage: '' }
        case 'sign_out':
            return state
        default:
            return state
    }
}

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
        dispatch({ type: 'signin', payload: token })
        navigate('mainFlow')
    } else {
        navigate('loginFlow')
    }
}

const clearErrorMessage = dispatch => () => dispatch({ type: 'clear_error_message' })

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
        try {
            const response = await trackerApi.post('/signin', { email, password })
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({ type: 'signin', payload: response.data.token })
            navigate('trackList')
        }
        catch (error) {
            dispatch({
                type: 'add_error',
                payload: 'Something went wrong with sign in.'
            })
        }
    }
}

const signout = dispatch => async () => {
    await AsyncStorage.removeItem('token')
    dispatch({ type: 'sign_out' })
    navigate('loginFlow')
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout, clearErrorMessage, tryLocalSignin },
    { token: null, errorMessage: '' }
)

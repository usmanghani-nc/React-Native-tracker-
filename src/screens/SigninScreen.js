import React, { useContext } from 'react'

// Imports..
import { StyleSheet, View } from 'react-native'
import { NavigationEvents } from 'react-navigation'

// Componets..
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../Components/AuthForm'
import Navlink from '../Components/NavLink'

const SigninScreen = ({ navigtaion }) => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext)
    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage} />
            <AuthForm
                headerText="Sign In to your acccount"
                errorMessage={state.errorMessage}
                onSubmit={signin}
                submitBtnText="Sign In"
            />
            <Navlink
                text="Have an account? Sigup in instead!"
                routeName="Signup"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 100
    }
})

SigninScreen.navigationOptions = () => {
    return {
        header: () => false,
    };
};

export default SigninScreen





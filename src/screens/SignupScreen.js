import React, { useContext } from 'react'

// Imports..
import { StyleSheet, View } from 'react-native'

// Componets..
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../Components/AuthForm'
import Navlink from '../Components/NavLink'

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);


    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                onSubmit={signup}
                submitBtnText="Sign Up"
            />
            <Navlink
                text="Already have an account? Sign in instead!"
                routeName="Signin"
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

SignupScreen.navigationOptions = () => {
    return {
        header: () => false,
    };
};

export default SignupScreen



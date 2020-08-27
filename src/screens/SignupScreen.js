import React, { useState, useContext } from 'react'

// Imports..
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'

// Componets..
import { Context as AuthContext } from '../context/AuthContext'
import Spacer from '../Components/Spacer'

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign Up for Tracker</Text>
            </Spacer>
            <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer />
            <Input
                secureTextEntry
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
            />
            {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
            <Spacer>
                <Button title="Sign Up" onPress={() => signup({ email, password })} />
            </Spacer>

            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                <Spacer>
                    <Text style={styles.link}>Already have account ? Sign in instead</Text>
                </Spacer>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 100
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginTop: 15,
        marginLeft: 15
    },
    link: {
        color: 'blue'
    }
})

SignupScreen.navigationOptions = () => {
    return {
        header: () => false,
    };
};

export default SignupScreen



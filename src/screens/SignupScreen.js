import React, { useState } from 'react'

// Imports..
import { StyleSheet, View } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'

// Componets..
import Spacer from '../Components/Spacer'

const SignupScreen = ({ navigation }) => {
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
            <Spacer>
                <Button title="Sign Up" />
            </Spacer>
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



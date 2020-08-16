import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const SignupScreen = ({ navigation }) => {
    return (
        <>
            <View>
                <Text>SignupScreen</Text>
            </View>
            <Button title="Got to sign in" onPress={() => navigation.navigate("Signin")} />
            <Button title="Got to main flow" onPress={() => navigation.navigate("mainFlow")} />
        </>
    )
}

export default SignupScreen

const styles = StyleSheet.create({})

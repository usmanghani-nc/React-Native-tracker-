import React, { useContext } from 'react'

// Componets..
import { StyleSheet, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import { Context as AuthContext } from '../context/AuthContext'
import Spacer from '../Components/Spacer'

const AccountScreen = () => {
    const { signout } = useContext(AuthContext)
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text style={{ fontSize: 24 }}>AccountScreen</Text>
            <Spacer>
                <Button
                    title="Sign out"
                    onPress={signout}
                />
            </Spacer>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})

export default AccountScreen


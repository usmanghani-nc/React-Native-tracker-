import React, { useContext } from 'react'

// Componets..
import { Text } from 'react-native'
import { Button } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import { Context as AuthContext } from '../context/AuthContext'
import Spacer from '../Components/Spacer'
import FontAwsome from '@expo/vector-icons'

const AccountScreen = () => {
    const { signout } = useContext(AuthContext)
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Spacer>
                <Button
                    title="Sign out"
                    onPress={signout}
                />
            </Spacer>
        </SafeAreaView>
    )
}

AccountScreen.navgationOptions = {
    title: 'Account',
    tabBarIcon: <FontAwsome name="gear" size={20} />
}

export default AccountScreen


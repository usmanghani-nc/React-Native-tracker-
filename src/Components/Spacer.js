import React from 'react'
import { StyleSheet, View } from 'react-native'

const Spacer = ({ children }) => {
    return (
        <View style={styles.Spacer}>
            {children}
        </View>
    )
}

export default Spacer

const styles = StyleSheet.create({
    Spacer: {
        margin: 15
    }
})

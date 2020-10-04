import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const TrackDetailScreen = ({ navigation }) => {
    const _id = navigation.params('_id')

    return (
        <View>
            <Text>TrackDetailScreen</Text>
        </View>
    )
}
const styles = StyleSheet.create({})

export default TrackDetailScreen

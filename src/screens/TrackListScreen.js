import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const TrackListScreen = ({ navigation }) => {
    return (
        <View>
            <Text>TrackListScreen</Text>
            <Button title="Got to track detail" onPress={() => navigation.navigate("trackDetail")} />
        </View>
    )
}

const styles = StyleSheet.create({})

export default TrackListScreen



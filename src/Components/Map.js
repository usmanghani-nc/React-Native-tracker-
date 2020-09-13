import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import MapView, { Polyline } from 'react-native-maps'

const Map = () => {
    let points = [];

    for (let i = 0; i < 20; i++) {
        if (i % 2 === 0) {
            points.push({
                latitude: 37.78825 + i * 0.01,
                longitude: -122.4324 + i * 0.01,
            })
        } else {
            points.push({
                latitude: 37.78825 - i * 0.02,
                longitude: -122.4324 + i * 0.02,
            })
        }
    }
    return (
        <View>
            <Text h6>im a map</Text>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Polyline coordinates={points} />
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
})

export default Map;
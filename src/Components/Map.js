import React, { useContext } from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import { Text } from 'react-native-elements'
import MapView, { , Circle } from 'react-native-maps'
import { Context as LocationContext } from '../context/LocationContext'

const Map = () => {
    const { state: { currentLocation }, locations } = useContext(LocationContext)

    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
    }
    return (
        <View>
            <Text h6>im a map</Text>
            <MapView
                style={styles.map}
                initialRegion={{
                    ...currentLocation.coords,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}

            // region={{
            //     ...currentLocation.coords,
            //     latitudeDelta: 0.0922,
            //     longitudeDelta: 0.0421,
            // }}
            >
                <Circle
                    center={currentLocation.coords}
                    radius={300}
                    strokeColor="rgba(158, 158, 255, 1.0)"
                    fillColor="rgba(158, 158, 255, 0.3)"
                />
                <Polyline coordinates={locations.map(loc => loc.coords)} />
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
import '../_mocklocation'
import React, { useContext, useCallback } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import { Context as LocationContext } from '../context/LocationContext'
import userLocation from '../hooks/userLocation'
import Map from '../Components/Map'
import TrackFrom from '../Components/TrackFrom'


const TrackCreateScreen = ({ isFocused }) => {
    const { state, addLocation } = useContext(LocationContext)
    console.log('out', state.recording)
    const callback = useCallback((location) => {
        console.log('in', state.recording)
        addLocation(location, state.recording)
    }, [state.recording])

    const [err] = userLocation(isFocused, callback)

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h3>TrackCreateScreen</Text>
            <Map />
            {err ? <Text >Pleace enable location services</Text> : null}
            <TrackFrom />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})

export default withNavigationFocus(TrackCreateScreen)


import '../_mocklocation'
import React, { useContext, useCallback } from 'react'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import { Context as LocationContext } from '../context/LocationContext'
import userLocation from '../hooks/userLocation'
import Map from '../Components/Map'
import TrackFrom from '../Components/TrackFrom'
import FontAwsome from '@expo/vector-icons'

const TrackCreateScreen = ({ isFocused }) => {
    const { state: { recording }, addLocation } = useContext(LocationContext)

    const callback = useCallback((location) => {
        addLocation(location, recording)
    }, [recording])

    const [err] = userLocation(isFocused || recording, callback)

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h3>TrackCreateScreen</Text>
            <Map />
            {err ? <Text >Pleace enable location services</Text> : null}
            <TrackFrom />
        </SafeAreaView>
    )
}

TrackCreateScreen.navgationOptions = {
    title: 'Add Track',
    tabBarIcon: <FontAwsome name="plus" size={20} />
}

export default withNavigationFocus(TrackCreateScreen)


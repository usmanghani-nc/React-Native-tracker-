import React, { useContext } from 'react'
import { Input, Button } from 'react-native-elements'
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext'

const TrackFrom = () => {
    const { state: { name, recording, locations }, startRecording, stopRecording, changeName } = useContext(LocationContext)
    console.log(locations.length, "lenght")
    return (
        <>
            <Spacer>
                <Input onChangeText={changeName} placeholder="Enter Name" value={name} />
            </Spacer>
            {recording
                ? <Button title="Stop" onPress={stopRecording} />
                : <Button title="Start Recording" onPress={startRecording} />
            }
        </>
    )
}

export default TrackFrom



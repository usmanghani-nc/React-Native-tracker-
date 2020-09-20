import * as Location from 'expo-location'

const tenMetersWithDegrees = 0.0001;

const getLocation = increament => {
    return {
        timestamps: 10000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altidue: 5,
            longitude: 67.029831 + increament * tenMetersWithDegrees,
            latitude: 24.914440 + increament * tenMetersWithDegrees
        }
    };
}


let counter = 0;
setInterval(() => {
    Location.EventEmitter.emit("Expo.locationChanged", {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    })
    counter++
}, 1000)
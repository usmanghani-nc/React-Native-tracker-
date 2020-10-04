import React from 'react'

// Imports..
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { setNavigator } from './src/navigationRef'

// Screens..
import ResolveAuthScreen from './src/screens/ResolveAuthScreen'
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import AccountScreen from './src/screens/AccountScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import TrackListScreen from './src/screens/TrackListScreen'

// Context Provider...
import { Provider as LocationContext } from './src/context/LocationContext'
import { Provider as AuthProvider } from './src/context/AuthContext'
import { Provider as TrackContext } from './src/context/TrackContext'


const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      trackList: TrackListScreen,
      trackDetail: TrackDetailScreen
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  })
},
  {
    initialRouteName: 'ResolveAuth'
  })


const App = createAppContainer(switchNavigator)

export default () => {
  return (
    <TrackContext>
      <LocationContext>
        <AuthProvider>
          <App ref={(navigatorRef) => {
            setNavigator(navigatorRef)
          }} />
        </AuthProvider>
      </LocationContext>
    </TrackContext>
  )
}
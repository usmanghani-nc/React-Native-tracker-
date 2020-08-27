import { NavigationActions } from 'react-navigation'

let navigator;

export const setNavigator = (navRef) => {
    navigator = navRef
}

export const navigate = (routeName, params) => {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    )
}
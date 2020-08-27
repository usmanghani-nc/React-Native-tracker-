import React, { useReducer } from 'react';

export default (reducer, actions, defaultvalue) => {
    const Context = React.createContext();

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, defaultvalue)

        const boundActions = {};
        for (let key in actions) {
            console.log(key, "actions")
            boundActions[key] = actions[key](dispatch);
        }

        return (
            <Context.Provider value={{ state, ...boundActions, }}>
                {children}
            </Context.Provider>
        )
    };

    return { Provider, Context }
};
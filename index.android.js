import React, { Component } from 'react';
import MapView from './app/components/MapView'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './app/reducers'
import AppContainer from './app/containers/AppContainer'


function configureStore(initialState) {
   const enhancer = compose(
       applyMiddleware(
           applyMiddleware,
       ),
   );
   return createStore(reducer, initialState, enhancer);
}

const store = configureStore({
    location: { },
});

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

const App = ( ) => (
    <Provider store={ store }>
        <AppContainer />
    </Provider>
);

AppRegistry.registerComponent('tangramMap', ( ) => App);

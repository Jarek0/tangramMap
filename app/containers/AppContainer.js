import React, { Component } from 'react';
import { View } from 'react-native';
import MapView from './../components/MapView'

export default class AppContainer extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <MapView
                    style={{flex: 1}}
                    ref={(ref) => this._mapView = ref}>
                </MapView>
            </View>
        );
    }
}
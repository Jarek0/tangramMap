import React, { Component, PropTypes } from 'react';
import { View, Dimensions , requireNativeComponent, StyleSheet} from 'react-native';
import { ActionCreators } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

var TangramMapView = requireNativeComponent('TangramMapView', {
    name: 'TangramMapView',
    propTypes: {
        ...View.propTypes
    }
} );

class MapView extends Component {
    
    render() {
        return (
            <View style = {{flex: 1}} >
            <TangramMapView
                style={{flex: 1}}
                ref='mapView'
            />
            </View>
        );
    }
}

function mapDispatchToProps( dispatch ) {
    return bindActionCreators( ActionCreators, dispatch );
}

function mapStateToProps( state ) {
    return {
        navigationState: state.navigationState,
        viewDimensions: state.viewDimensions,
    };
}

export default connect( mapStateToProps, mapDispatchToProps )( MapView );

import * as types from './types'

export function setMapLocation(location) {
    return {
        type: types.SET_MAP_LOCATION,
        gpsLocation: location
    }
}

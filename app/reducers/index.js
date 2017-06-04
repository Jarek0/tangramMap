import { combineReducers } from 'redux'
import * as mapReducers from './map/reducers'

export default combineReducers( Object.assign(
    mapReducers,
) );

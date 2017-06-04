import createReducer from '../../lib/createReducer'
import * as types from '../../actions/map/types'

export const location = createReducer( {}, {
    [types.SET_MAP_LOCATION](state, action) {
        let newState=action.location;
        return newState;
    },

});

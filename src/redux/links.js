import * as Types from '../constants/ActionTypes'


var initialState = [];


const links = (state = initialState, action) => {
    switch (action.type) { 
        case Types.FETCH_LINK:
            state  = action.links
            return [...state];
        default:

            return [...state]
    }
}
export default links;
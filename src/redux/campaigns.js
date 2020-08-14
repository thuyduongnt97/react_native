import * as Types from '../constants/ActionTypes'

const initialState = {
  isLoading: false,
  campaigns: [],
  channels: []
}

const campaigns = (state = initialState, action) => {
    switch (action.type) {
        case Types.START_LINKS_LOADING:
          return Object.assign({}, state, {
            isLoading: true,
          });
      
        default:
          return state;
    }
}
export default campaigns;

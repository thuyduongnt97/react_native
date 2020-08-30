import * as Types from '../constants/ActionTypes'

const initialState = {
  isLoading: false,
  channels: [],
  channel_id: "",
}

const channels = (state = initialState, action) => {
    switch (action.type) {
      case Types.SET_CHANNEL_ID:
        return Object.assign({}, state, {
            channel_id: action.channel_id,
      });
      default:
            return state;
    }
}
export default channels
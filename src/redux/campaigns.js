import * as Types from '../constants/ActionTypes'

const initialState = {
  isLoading: false,
  campaigns: [],
  campaignDetail: [],
  campaign_id: "",
}

const campaigns = (state = initialState, action) => {
    switch (action.type) {
      case Types.START_CAMPAIGNS_LOADING:
        return Object.assign({}, state, {
          isLoading: true,
      });
      case Types.CAMPAIGNS_LOADED:
        return Object.assign({}, state, {
          isLoading: false,
          campaigns: action.data.result,
      });
      case Types.CLEAR_CAMPAIGNS:
        return Object.assign({}, state, {
          campaigns: [],
      });
      case Types.GET_ID_CAMPAIGNS:
        return Object.assign({}, state, {
          campaign_id: action.campaign_id,
      });

      //Campaign detail
      case Types.START_CAMPAIGNDETAIL_LOADING:
        return Object.assign({}, state, {
          isLoading: true,
      });
      case Types.CAMPAIGNDETAIL_LOADED:
        // console.log(action.data);
        return Object.assign({}, state, {
          isLoading: false,
          campaignDetail: action.data,
      });
      case Types.CLEAR_CAMPAIGNDETAIL:
        return Object.assign({}, state, {
          campaignDetail: [],
      });

      case Types.SET_CAMPAIGNS_GROUP:
        return Object.assign({}, state, {
          campaigns: action.campaigns,
      });
      default:
        return state;
    }
}
export default campaigns;

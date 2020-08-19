import * as Types from '../constants/ActionTypes'
import callApi from './../utils/apiCaller'
import base64 from 'react-native-base64';


function startCampaignLoading() {
    return { type: Types.START_CAMPAIGNS_LOADING };
  }
  
const campaignLoaded = (data) =>{
  return {
      type : Types.CAMPAIGNS_LOADED,
      data
  }
} 
  
function clearCampaign() {
  return { type: Types.CLEAR_CAMPAIGNS };
}
const actFetchCampaignRequest = (key_app) => {
    key_app = JSON.stringify({"key_app": key_app})
  return (dispatch) => {
      return callApi('getlist-campaign', 'POST', key_app).then(res => {
          dispatch(campaignLoaded(res.data))
      })
  }
}
  
  
export function loadCampaign(key_app) {
    return dispatch => {
        dispatch(startCampaignLoading());
        // Connect to the API here
        dispatch(actFetchCampaignRequest(key_app));
    };
}
  
export function refreshCampaign() {
    return dispatch => {
        dispatch(clearCampaign());
    };
}

export function getCampaignID(campaign_id) {
  return {
    type : Types.GET_ID_CAMPAIGNS,
    campaign_id
  }
}

 /**
  * Campaign detail
  *  
  * 
*/
function startCampaignDetailLoading() {
  return { type: Types.START_CAMPAIGNDETAIL_LOADING };
}

const campaignDetailLoaded = (data) =>{
  return {
      type : Types.CAMPAIGNDETAIL_LOADED,
      data
  }
} 

function clearCampaignDetail() {
  return { type: Types.CLEAR_CAMPAIGNDETAIL };
}
const  actFetchCampaignDetailRequest = (id) => {
  id = id+""
  var campaign_id = base64.encode(id)
  campaign_id = JSON.stringify({"campaign_id": campaign_id})
  return (dispatch) => {
    return callApi('getinfo-campaign', 'POST', campaign_id).then(res => {
        dispatch(campaignDetailLoaded(res.data))
    })
  }
}


export function loadCampaignDetail(campaign_id) {
  return dispatch => {
      dispatch(startCampaignDetailLoading());
      // Connect to the API here
      dispatch(actFetchCampaignDetailRequest(campaign_id));
  };
}

export function refreshCampaignDetail() {
  return dispatch => {
      dispatch(clearCampaignDetail());
  };
}

export function setCampaignsGroup(campaigns) {
  return {
    type : Types.SET_CAMPAIGNS_GROUP,
    campaigns
  }
}

// export function setUsersGroup(users) {
//   return {
//     type : Types.SET_USERS_GROUP,
//     users
//   }
// }
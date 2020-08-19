import * as Types from '../constants/ActionTypes'
import callApi from './../utils/apiCaller'
import base64 from 'react-native-base64';


function startGroupsLoading() {
    return { type: Types.START_GROUP_LOADING };
  }
  
const groupLoaded = (data) =>{
  return {
      type : Types.GROUP_LOADED,
      data
  }
} 
  
function clearGroup() {
  return { type: Types.CLEAR_GROUP };
}
const actFetchGroupRequest = (key_app) => {
    key_app = JSON.stringify({"key_app": key_app})
  return (dispatch) => {
      return callApi('getlist-group', 'POST', key_app).then(res => {
          dispatch(groupLoaded(res.data))
      })
  }
}
  
  
export function loadGroup(key_app) {
    return dispatch => {
        dispatch(startGroupsLoading());
        // Connect to the API here
        dispatch(actFetchGroupRequest(key_app));
    };
}
  
export function refreshGroup(key_app) {
    return dispatch => {
        dispatch(startGroupsLoading());
        dispatch(clearGroup());
        dispatch(actFetchGroupRequest(key_app));
    };
}

export function getGroupID(group_id) {
  return {
    type : Types.GET_ID_GROUP,
    group_id
  }
}

/**Group detail */


function startGroupsDetailLoading() {
  return { type: Types.START_GROUPDETAIL_LOADING };
}

const groupDetailLoaded = (data) =>{
  return {
      type : Types.GROUPDETAIL_LOADED,
      data
  }
} 

function clearGroupDetail() {
  return { type: Types.CLEAR_GROUPDETAIL };
}
const actFetchGroupDetailRequest = (id) => {
  id = id+""
  var group_id = base64.encode(id)
  group_id = JSON.stringify({"group_id": group_id})
  return (dispatch) => {
    return callApi('getinfo-group', 'POST', group_id).then(res => {
        dispatch(groupDetailLoaded(res.data))
    })
  }
}


export function loadGroupDetail(group_id) {
  return dispatch => {
      dispatch(startGroupsDetailLoading());
      // Connect to the API here
      dispatch(actFetchGroupDetailRequest(group_id));
  };
}

export function refreshGroupDetail(group_id) {
  return dispatch => {
      dispatch(startGroupsDetailLoading());
      dispatch(clearGroupDetail());
      dispatch(actFetchGroupDetailRequest(group_id));
  };
}


export function setUsersGroup(users) {
  return {
    type : Types.SET_USERS_GROUP,
    users
  }
}



import * as Types from '../constants/ActionTypes'
import callApi from './../utils/apiCaller'
import base64 from 'react-native-base64'

//chart
function startChartLoading() {
    return { type: Types.START_CHART_LOADING };
}
  
const chartLoaded = (data) =>{
    return {
        type : Types.CHART_LOADED,
        data
    }
} 
  
function clearChart() {
    return { type: Types.CLEAR_CHART };
}

const actFetchChartRequest = (id) => {
    id = id+""
    var linkID = base64.encode(id)
    console.log(linkID);
    linkID = JSON.stringify({"linkID": linkID})
    console.log(linkID)
    return (dispatch) => {
        return callApi('getlink-chart', 'POST', linkID).then(res => {
            console.log(res.data);
            dispatch(chartLoaded(res.data))
        })
    }
}
  
  
export function loadChart(linkID) {
    return dispatch => {
        dispatch(startChartLoading());
        // Connect to the API here
        dispatch(actFetchChartRequest(linkID));
    };
}
  
export function refreshChart(linkID) {
    return dispatch => {
        dispatch(startChartLoading());
        dispatch(clearChart());
        dispatch(actFetchChartRequest(linkID));
    };
}
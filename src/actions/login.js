import * as Types from '../constants/ActionTypes'
import callApi from './../utils/apiCaller'
import base64 from 'react-native-base64'

//Login
function startLogin(email, pass) {
    return { type: Types.START_LOGIN, email, pass};
  }
  
  const login = (key_app) =>{
    return {
        type : Types.lOGIN,
        key_app
    }
  } 
  
  const actFetchLoginRequest = (email, pass) => {
    var data = base64.encode(email)+"."+base64.encode(pass)
    data = data.replace("d", "@")
    data = data.replace("u", "#")
    data = data.replace("o", "!")
    data = data.replace("n", "*")
    data = data.replace("g", "$")
  
    data = JSON.stringify({"data": data})
    return (dispatch) => {
      return callApi('login', 'POST', data).then(res => {
          console.log(res.data.result)
          dispatch(login(res.data.result))
      })
    }
  }
  
  
  export function loadLogin(email, pass) {
    return dispatch => {
       dispatch(startLogin(email, pass));
        // Connect to the API here
        dispatch(actFetchLoginRequest(email, pass));
    };
  }
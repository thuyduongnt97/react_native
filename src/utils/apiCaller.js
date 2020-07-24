import axios from 'axios';

import * as apiConfig from '../constants/config'

export default function  callApi (endpoint, method='GET', body) {

  // console.log("trong api")
  var config = {
    method: method,
    url: `${apiConfig.API_URL}/${endpoint}`,
    headers: { 'Content-Type':  'application/json' },
    data: body
  };
  // // try {
    return axios(config).catch(err => {
      console.log(config);
      console.log(err);
      
    })
  // } catch (error) {
  //   console.error(error)
  // }
}


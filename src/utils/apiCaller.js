// import axios from 'axios';

import * as apiConfig from '../constants/config'

// export default function  callApi (endpoint, method='GET', body) {
//   console.log("trong api")
//   var config = {
//     method: method,
//     url: `${apiConfig.API_URL}/${endpoint}`,
//     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//     data: body
//   };
//   // try {
//     return   axios(config).catch(err => {
//       console.log(err);
//     })
//   // } catch (error) {
//   //   console.error(error)
//   // }
// }

  
import axios from 'axios';
const getDataApi = async() => {
  const proxy = `https://cors-anywhere.herokuapp.com/`;
  const api = `${apiConfig.API_URL}/${endpoint}`;
  const result = await axios.get(proxy + api);
  const data = await result.status === 200 ? result.data : [];
  return data;
}
export const api = {
  getDataApi
}
import * as Types from '../constants/ActionTypes'
import callApi from './../utils/apiCaller'
import base64 from 'react-native-base64';

export function setChannelId(channel_id) {
    return {
      type : Types.SET_CHANNEL_ID,
      channel_id
    }
  }
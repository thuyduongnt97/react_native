import * as Types from '../constants/ActionTypes'
import callApi from './../utils/apiCaller'
import base64 from 'react-native-base64'


const stubImages = [
    {
      id: 0,
      link:
        'https://s-media-cache-ak0.pinimg.com/736x/6d/68/e5/6d68e55c58127d5f8271dc40449e037d--baddie-natural-makeup-pretty-natural-makeup.jpg',
      description: 'Test image in the grid',
    },
    {
      id: 1,
      link:
        'https://s-media-cache-ak0.pinimg.com/736x/90/41/f0/9041f0a56732ec5ff824ea92852df69e.jpg',
      description: 'Test image in the grid',
    },
    {
      id: 2,
      link:
        'https://pbs.twimg.com/profile_images/1642784826/pretty-girl-jessica-alba_422_8785.jpg',
      description: 'Test image in the grid',
    },
    {
      id: 3,
      link:
        'https://pbs.twimg.com/profile_images/1642784826/pretty-girl-jessica-alba_422_8785.jpg',
      description: 'Test image in the grid',
    },
    {
      id: 4,
      link:
        'https://s-media-cache-ak0.pinimg.com/736x/6d/68/e5/6d68e55c58127d5f8271dc40449e037d--baddie-natural-makeup-pretty-natural-makeup.jpg',
      description: 'Test image in the grid',
    },
    {
      id: 5,
      link:
        'https://s-media-cache-ak0.pinimg.com/736x/90/41/f0/9041f0a56732ec5ff824ea92852df69e.jpg',
      description: 'Test image in the grid',
    },
    {
      id: 6,
      link:
        'https://pbs.twimg.com/profile_images/1642784826/pretty-girl-jessica-alba_422_8785.jpg',
      description: 'Test image in the grid',
    },
    {
      id: 7,
      link:
        'https://pbs.twimg.com/profile_images/1642784826/pretty-girl-jessica-alba_422_8785.jpg',
      description: 'Test image in the grid',
    },
    {
      id: 8,
      link:
        'https://s-media-cache-ak0.pinimg.com/736x/6d/68/e5/6d68e55c58127d5f8271dc40449e037d--baddie-natural-makeup-pretty-natural-makeup.jpg',
      description: 'Test image in the grid',
    },
    {
      id: 9,
      link:
        'https://s-media-cache-ak0.pinimg.com/736x/90/41/f0/9041f0a56732ec5ff824ea92852df69e.jpg',
      description: 'Test image in the grid',
    },
    {
      id: 10,
      link:
        'https://pbs.twimg.com/profile_images/1642784826/pretty-girl-jessica-alba_422_8785.jpg',
      description: 'Test image in the grid',
    },
    {
      id: 11,
      link:
        'https://pbs.twimg.com/profile_images/1642784826/pretty-girl-jessica-alba_422_8785.jpg',
      description: 'Test image in the grid',
    },
  ];



//links
function startLinksLoading() {
  return { type: Types.START_LINKS_LOADING };
}

const linksLoaded = (links) =>{
  return {
      type : Types.LINKS_LOADED,
      links
  }
} 

function clearLinks() {
  return { type: Types.CLEAR_LINKS };
}
const actFetchLinksRequest = () => {
  return (dispatch) => {
      return callApi('links/43', 'GET', null).then(res => {
          dispatch(linksLoaded(res.data))
      })
      // dispatch(linksLoaded(getDataApi3))
  }
}


export function loadLinks() {
  return dispatch => {
      dispatch(startLinksLoading());
      // Connect to the API here
      dispatch(actFetchLinksRequest());
  };
}

export function refreshLinks() {
  return dispatch => {
      dispatch(startLinksLoading());
      dispatch(clearLinks());
      dispatch(actFetchLinksRequest());
  };
}




//Login
function startLogin(email) {
  return { type: Types.START_LOGIN, email};
}

const login = (key_app) =>{
  return {
      type : Types.lOGIN,
      key_app
  }
} 

const actFetchLoginRequest = (email, pass) => {
  var data = base64(email)+"."+base64(pass)
  return (dispatch) => {
    return callApi('login', 'POST', data).then(res => {
        dispatch(login(res.data))
    })
  }
}


export function loadLogin(email, pass) {
  return dispatch => {
      dispatch(startLogin());
      // Connect to the API here
      console.log("trong index action" + email+ pass);
      dispatch(actFetchLoginRequest(email, pass));
  };
}



//template Image

function startImagesLoading() {
  return { type: Types.START_IMAGES_LOADING };
}

function imagesLoaded(images) {
  return {
    type: Types.IMAGES_LOADED,
    images,
  };
}

function clearImages() {
  return { type: Types.CLEAR_IMAGES };
}
  
export function loadImages() {
    return dispatch => {
        dispatch(startImagesLoading());
        // Connect to the API here
        dispatch(imagesLoaded(stubImages));
    };
}
  
export function refreshImages() {
    return dispatch => {
        dispatch(startImagesLoading());
        dispatch(clearImages());
        dispatch(imagesLoaded(stubImages));
    };
}
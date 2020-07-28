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
const actFetchLinksRequest = (key_app) => {
  key_app = JSON.stringify({"data": key_app})
  return (dispatch) => {
      return callApi('getlink', 'POST', key_app).then(res => {
          dispatch(linksLoaded(Object.values(res.data.links)))
      })
  }
}


export function loadLinks(key_app) {
  return dispatch => {
      dispatch(startLinksLoading());
      // Connect to the API here
      dispatch(actFetchLinksRequest(key_app));
  };
}

export function refreshLinks(key_app) {
  return dispatch => {
      dispatch(startLinksLoading());
      dispatch(clearLinks());
      dispatch(actFetchLinksRequest(key_app));
  };
}




//Login
function startLogin(email, pass) {
  return { type: Types.START_LOGIN, email, pass};
}

const login = (key_app) =>{
  // console.log("login: "+key_app);
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
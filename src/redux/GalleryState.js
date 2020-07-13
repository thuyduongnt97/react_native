import * as Types from '../constants/ActionTypes'

const initialState = {
  isLoading: false,
  images: [],
};

export default function GalleryStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case Types.START_IMAGES_LOADING:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case Types.IMAGES_LOADED:
      return Object.assign({}, state, {
        isLoading: false,
        images: action.images,
      });
    case Types.CLEAR_IMAGES:
      return Object.assign({}, state, {
        images: [],
      });
    default:
      return state;
  }
}

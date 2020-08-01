import * as Types from '../constants/ActionTypes'

const initialState = {
    isLoading: false,
    email: '',
    pass: '',
    key_app: "9fc95c9b705aba7c57814eaa09845e44$2y$10$RgS3jnDRScA3SiEkNK59Pe1/N/w/krSymyqEkWxHQjHujAsb6CQUm"
}


const login = (state = initialState, action) => {
    switch (action.type) {
        case Types.START_LOGIN:
          return Object.assign({}, state, {
            isLoading: true,
            email: action.email,
            pass: action.pass,
          });
        case Types.lOGIN:
          return Object.assign({}, state, {
            isLoading: false,
            key_app: action.key_app,
          });
        default:
          return state;
      }
}
export default login;
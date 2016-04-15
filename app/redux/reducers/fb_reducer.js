import { FB_INIT, FB_LOGIN, FB_LOGOUT } from '../actions/fb_action';

export function fbReducer(state = {}, action) {
  switch (action.type) {
    case FB_INIT:
      return state;
      break;
    case FB_LOGIN:
    case FB_LOGOUT:
      return Object.assign({}, state, {
        loggedIn: action.loggedIn,
        userId: action.id,
        token: action.token
      });
      break;
    default:
      return state;
  }
}

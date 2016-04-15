import { FB_GET_INFO } from '../actions/info_action';

export function infoReducer(state = {}, action) {
  switch (action.type) {
    case FB_GET_INFO:
      return Object.assign({}, state, {
        info: action.info,
        status: action.status
      });
      break;
    default:
      return state;
  }
}

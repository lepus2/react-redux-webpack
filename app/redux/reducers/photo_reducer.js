import { FB_GET_PHOTO } from '../actions/photo_action';

export function photoReducer(state = {}, action) {
  switch (action.type) {
    case FB_GET_PHOTO:
      return Object.assign({}, state, {
        photos: action.photos,
        status: action.status
      });
      break;
    default:
      return state;
  }
}

import { combineReducers } from 'redux';

//리듀서를 Import
import { fbReducer } from './reducers/fb_reducer';
import { photoReducer } from './reducers/photo_reducer';
import { infoReducer } from './reducers/info_reducer';




const rootReducer = combineReducers({
  /*
    필요한 리듀서들을 여기에
  */
  fbReducer,
  photoReducer,
  infoReducer
});

module.exports = rootReducer;

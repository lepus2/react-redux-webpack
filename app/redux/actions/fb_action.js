export const FB_INIT = 'FB_INIT';
export const FB_LOGIN = 'FB_LOGIN';
export const FB_LOGOUT = 'FB_LOGOUT';

import { fbGetInfo } from './info_action';

export function fbInit() {
  return {
    type: FB_INIT,
    status: 'SUCCESS'
  }
}
export function fbLogin() {
  return dispatch => {
    FB.getLoginStatus( res => {
      if (res.status === 'connected') {
        dispatch(login_success(res));
      }
      else {
        FB.login( res => {
          console.log(res);
          if (res.status === 'connected') {
            console.log('connected', res);
            dispatch(fbGetInfo());
            dispatch(login_success(res));
          }
          else {
            dispatch(login_fail());
          }
        }, {scope: 'public_profile,email,user_likes,user_tagged_places,user_website,user_videos,user_posts,user_education_history,user_work_history,user_religion_politics, user_hometown,user_about_me,user_location,user_likes,user_photos,manage_pages',return_scopes: true});
      }
    });
  }
}

export function fbLogout() {
  return dispatch => {
    FB.logout( res => {
      console.log(res);
      dispatch(logout_success(res));
    });
  }
}

export function login_success(res){
  return {
    type: FB_LOGIN,
    loggedIn: true,
    token: res.authResponse.accessToken,
    id: res.authResponse.userID,
    status: res.status
  }
}

function logout_success(res){
  return {
    type: FB_LOGOUT,
    loggedIn: false,
    token: null,
    id: null,
    status: res.status
  }
}

function login_fail(){
  return {
    type: FB_LOGIN,
    loggedIn: false,
    status: 'SUCCESS'
  }
}

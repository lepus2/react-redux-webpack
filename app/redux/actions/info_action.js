export const FB_GET_INFO = 'FB_GET_INFO';

export function fbGetInfo() {
  return (dispatch, getState) => {
    FB.api(
      'me?fields=name,gender,birthday,email,devices,education,hometown,location,religion,likes,work',
      'GET',
      {},
      res => {
        dispatch(saveInfo(res));
      }
    );

  }
}

function saveInfo(res) {
  return {
    type: FB_GET_INFO,
    info: res,
    status: 'SUCCESS'
  }
}

export const FB_GET_PHOTO = 'FB_GET_PHOTO';

export function fbGetPhoto() {
  return (dispatch, getState) => {
    FB.api(
      'me?fields=photos{created_time,images}',
      'GET',
      {},
      res => {
        dispatch(savePhotos(res.photos));
      }
    );

  }
}

function savePhotos(res) {
  return {
    type: FB_GET_PHOTO,
    photos: res.data,
    status: 'SUCCESS'
  }
}

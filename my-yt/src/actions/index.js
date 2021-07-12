export const REQUESTING = 'REQUESTING';
export const REQUEST_SUCESS = 'REQUEST_SUCESS';
export const REQUEST_FAIL = 'REQUEST_FAIL';
export const USER_INFORMATION = 'USER_INFORMATION';

export const sendLoginInformation = (name, password) => ({
  type: USER_INFORMATION,
  name,
  password,
});

export const requestVideos = () => ({
  type: REQUESTING,
})

export const requestSucess = (payload) => ({
  type: REQUEST_SUCESS,
  payload,
});

export const requestFail = (payload) => ({
  type: REQUEST_FAIL,
  payload,
});

export const getYoutubeVideos = (search = '') => (dispatch) => {
  dispatch(requestVideos());
  return fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${ search }&key=AIzaSyDybMeNva3xGJcCEanrhayjO-czW5bA2dY`)
    .then((response) => response.json())
    .then((data) => dispatch(requestSucess(data)))
    .catch((error) => dispatch(requestFail(error)));
};

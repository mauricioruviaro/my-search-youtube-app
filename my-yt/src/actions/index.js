export const REQUESTING = 'REQUESTING';
export const REQUEST_SUCESS = 'REQUEST_SUCESS';
export const REQUEST_FAIL = 'REQUEST_FAIL';
export const USER_INFORMATION = 'USER_INFORMATION';

export const sendLoginInformation = (name, password) => ({
  type: USER_INFORMATION,
  name,
  password,
});

import USER_NAME from '../actions';

const INITIAL_STATE = {
  name: '',
  password: '',
}

function userReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
  case USER_NAME:
    return {
      ...state,
      name: action.payload.name,
      password: action.payload.password,
    }
  default:
    return {
      ...state,
    }
  }
}

export default userReducer;

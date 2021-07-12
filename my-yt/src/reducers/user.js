import { USER_INFORMATION } from '../actions';

const INITIAL_STATE = {
  name: '',
  password: '',
};

function userReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
  case USER_INFORMATION:
    return {
      ...state,
      name: action.name,
      password: action.password,
    };
  default:
    return {
      ...state,
    };
  }
}

export default userReducer;

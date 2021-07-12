import {
  REQUESTING,
  REQUEST_SUCESS,
  REQUEST_FAIL
} from '../actions';

const INITIAL_STATE = {
  videos: [],
  loading: false,
  error: '',
}

function videosReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
  case REQUESTING:
    return {
      ...state,
      loading: true,
    }
  case REQUEST_SUCESS:
    return {
      ...state,
      videos: action.payload,
      loading: false,
    }
  case REQUEST_FAIL:
    return {
      ...state,
      loading: false,
      error: action.payload,
    }
  default:
    return {
      ...state,
    }
  }
}

export default videosReducer;

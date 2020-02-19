import api from '../services/api';
import { baseApiUrl } from '../config/constants';

const GET_VERSIONS_START = 'GET_VERSIONS_START';
const GET_VERSIONS_SUCCESS = 'GET_VERSIONS_SUCCESS';
const GET_VERSIONS_ERROR = 'GET_VERSIONS_ERROR';
const CLEAN_VERSIONS = 'CLEAN_VERSIONS';

const INITIAL_STATE = {
  data: [],
  error: true,
};

export const getVersions = car => async dispatch => {
  dispatch({ type: GET_VERSIONS_START });
  try {
    const { data } = await api(
      `${baseApiUrl}/brands/${car.brand}/models/${car.model}/years/${car.year}/versions`,
    );

    dispatch({ type: GET_VERSIONS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_VERSIONS_ERROR });
  }
};

export const cleanVersions = () => dispatch => {
  dispatch({ type: CLEAN_VERSIONS });
};

export const versions = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case GET_VERSIONS_START:
      return {
        ...state,
        data: [],
        error: false,
      };
    case GET_VERSIONS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: false,
      };
    case GET_VERSIONS_ERROR:
      return {
        ...state,
        data: [],
        error: true,
      };
    case CLEAN_VERSIONS:
      return {
        ...state,
        data: [],
        error: false,
      };
    default:
      return state;
  }
};

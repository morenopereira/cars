import api from '../services/api';
import { apiRoute } from '../constants';

const GET_VERSIONS_START = 'GET_VERSIONS_START';
const GET_VERSIONS_SUCCESS = 'GET_VERSIONS_SUCCESS';
const GET_VERSIONS_ERROR = 'GET_VERSIONS_ERROR';
const CLEAR_VERSIONS = 'CLEAR_VERSIONS';

const INITIAL_STATE = {
  data: [],
  error: true,
};

export const getVersions = car => async dispatch => {
  dispatch({ type: GET_VERSIONS_START });
  try {
    const { base } = apiRoute;

    const { data } = await api(
      `${base}/brands/${car.brand}/models/${car.model}/years/${car.year}/versions`,
    );

    dispatch({ type: GET_VERSIONS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_VERSIONS_ERROR });
  }
};

export const clearVersions = () => dispatch => {
  dispatch({ type: CLEAR_VERSIONS });
};

export function versions(state = INITIAL_STATE, action = {}) {
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
    case CLEAR_VERSIONS:
      return {
        ...state,
        data: [],
        error: false,
      };
    default:
      return state;
  }
}

import api from '../services/api';
import { apiRoute } from '../constants';

const GET_VERSIONS_START = 'GET_VERSIONS_START';
const GET_VERSIONS_SUCCESS = 'GET_VERSIONS_SUCCESS';
const GET_VERSIONS_ERROR = 'GET_VERSIONS_ERROR';

const INITIAL_STATE = {
  data: [],
  error: true,
};

export const getVersions = car => async dispatch => {
  dispatch({ type: GET_VERSIONS_START });
  try {
    const { main } = apiRoute;

    const { data } = await api(
      `${main}/brands/${car.brand}/models/${car.model}/years/${car.year}/versions`,
    );

    dispatch({ type: GET_VERSIONS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_VERSIONS_ERROR });
  }
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
    default:
      return state;
  }
}

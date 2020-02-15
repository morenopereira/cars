import api from '../services/api';
import { apiRoute } from '../constants';

const GET_MODELS_START = 'GET_MODELS_START';
const GET_MODELS_SUCCESS = 'GET_MODELS_SUCCESS';
const GET_MODELS_ERROR = 'GET_MODELS_ERROR';

const INITIAL_STATE = {
  data: [],
  error: false,
};

export const getModels = car => async dispatch => {
  dispatch({ type: GET_MODELS_START });
  try {
    const { main } = apiRoute;

    const { data } = await api(`${main}/brands/${car.brand}/models`);

    dispatch({ type: GET_MODELS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_MODELS_ERROR });
  }
};

export function models(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case GET_MODELS_START:
      return {
        ...state,
        data: [],
        error: false,
      };
    case GET_MODELS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: false,
      };
    case GET_MODELS_ERROR:
      return {
        ...state,
        data: [],
        error: true,
      };
    default:
      return state;
  }
}

import api from '../services/api';
import { apiRoute } from '../constants';

const GET_BRANDS_START = 'GET_BRANDS_START';
const GET_BRANDS_SUCCESS = 'GET_BRANDS_SUCCESS';
const GET_BRANDS_ERROR = 'GET_BRANDS_ERROR';

const INITIAL_STATE = {
  data: [],
  error: false,
};

export const getBrands = () => async dispatch => {
  dispatch({ type: GET_BRANDS_START });
  try {
    const { base } = apiRoute;

    const { data } = await api(`${base}/brands`);

    dispatch({ type: GET_BRANDS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_BRANDS_ERROR });
  }
};

export function brands(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case GET_BRANDS_START:
      return {
        ...state,
        data: [],
        error: false,
      };
    case GET_BRANDS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: false,
      };
    case GET_BRANDS_ERROR:
      return {
        ...state,
        data: [],
        error: true,
      };
    default:
      return state;
  }
}

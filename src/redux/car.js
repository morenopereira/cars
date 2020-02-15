import api from '../services/api';
import { apiRoute } from '../constants';

const GET_CAR_START = 'GET_CAR_START';
const GET_CAR_SUCCESS = 'GET_CAR_SUCCESS';
const GET_CAR_ERROR = 'GET_CAR_ERROR';

const INITIAL_STATE = {
  data: {},
  error: false,
};

export const getCar = car => async dispatch => {
  dispatch({ type: GET_CAR_START });
  try {
    const { main } = apiRoute;

    const { data } = await api(
      `${main}/brands/${car.brand}/models/${car.model}/years/${car.year}/versions/${car.versionId}`,
    );

    dispatch({ type: GET_CAR_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_CAR_ERROR });
  }
};

export function car(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case GET_CAR_START:
      return {
        ...state,
        data: {},
        error: false,
      };
    case GET_CAR_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: false,
      };
    case GET_CAR_ERROR:
      return {
        ...state,
        data: {},
        error: true,
      };
    default:
      return state;
  }
}

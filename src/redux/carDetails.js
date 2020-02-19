import api from '../services/api';
import { baseApiUrl } from '../config/constants';

const GET_CAR_DETAILS_START = 'GET_CAR_DETAILS_START';
const GET_CAR_DETAILS_SUCCESS = 'GET_CAR_DETAILS_SUCCESS';
const GET_CAR_DETAILS_ERROR = 'GET_CAR_DETAILS_ERROR';
const CLEAN_CAR_DEATILS = 'CLEAN_CAR_DEATILS';

const INITIAL_STATE = {
  data: {},
  error: false,
  loading: false,
};

export const getCarDetails = car => async dispatch => {
  dispatch({ type: GET_CAR_DETAILS_START });
  try {
    const { data } = await api(
      `${baseApiUrl}/brands/${car.brand}/models/${car.model}/years/${car.year}/versions/${car.versionId}`,
    );

    dispatch({ type: GET_CAR_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_CAR_DETAILS_ERROR });
  }
};

export const cleanCarDetails = () => dispatch => {
  dispatch({ type: CLEAN_CAR_DEATILS });
};

export const carDetails = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case GET_CAR_DETAILS_START:
      return {
        ...state,
        data: {},
        loading: true,
        error: true,
      };
    case GET_CAR_DETAILS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      };
    case GET_CAR_DETAILS_ERROR:
      return {
        ...state,
        data: {},
        loading: false,
        error: true,
      };
    case CLEAN_CAR_DEATILS:
      return {
        ...state,
        data: {},
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

import api from '../services/api';
import { apiRoute } from '../constants';

const GET_BRANDS_START = 'GET_BRANDS_START';
const GET_BRANDS_SUCCESS = 'GET_BRANDS_SUCCESS';
const GET_BRANDS_ERROR = 'GET_BRANDS_ERROR';

const GET_MODELS_START = 'GET_MODELS_START';
const GET_MODELS_SUCCESS = 'GET_MODELS_SUCCESS';
const GET_MODELS_ERROR = 'GET_MODELS_ERROR';

const GET_YEARS_START = 'GET_YEARS_START';
const GET_YEARS_SUCCESS = 'GET_YEARS_SUCCESS';
const GET_YEARS_ERROR = 'GET_YEARS_ERROR';

const GET_VERSIONS_START = 'GET_VERSIONS_START';
const GET_VERSIONS_SUCCESS = 'GET_VERSIONS_SUCCESS';
const GET_VERSIONS_ERROR = 'GET_VERSIONS_ERROR';

const GET_CAR_START = 'GET_CAR_START';
const GET_CAR_SUCCESS = 'GET_CAR_SUCCESS';
const GET_CAR_ERROR = 'GET_CAR_ERROR';

const INITIAL_STATE = {
  brands: [],
  models: [],
  years: [],
  versions: [],
  car: {},
  errors: {
    brands: false,
    models: false,
    years: false,
    versions: false,
    car: false,
  },
};

export const getBrands = () => async dispatch => {
  dispatch({ type: GET_BRANDS_START });
  try {
    const { main } = apiRoute;

    const { data } = await api(`${main}/brands`);

    dispatch({ type: GET_BRANDS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_BRANDS_ERROR });
  }
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

export const getYears = car => async dispatch => {
  dispatch({ type: GET_YEARS_START });
  try {
    const { main } = apiRoute;

    const { data } = await api(`${main}/brands/${car.brand}/models/${car.model}/years/${car.year}`);

    dispatch({ type: GET_YEARS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_YEARS_ERROR });
  }
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

export function cars(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case GET_BRANDS_START:
      return {
        ...state,
        brands: [],
        errors: {
          brands: false,
        },
      };
    case GET_BRANDS_SUCCESS:
      return {
        ...state,
        brands: action.payload,
        errors: {
          brands: false,
        },
      };
    case GET_BRANDS_ERROR:
      return {
        ...state,
        brands: [],
        errors: {
          brands: true,
        },
      };
    case GET_MODELS_START:
      return {
        ...state,
        models: [],
        errors: {
          models: false,
        },
      };
    case GET_MODELS_SUCCESS:
      return {
        ...state,
        models: action.payload,
        errors: {
          models: false,
        },
      };
    case GET_MODELS_ERROR:
      return {
        ...state,
        models: [],
        errors: {
          models: false,
        },
      };
    case GET_YEARS_START:
      return {
        ...state,
        years: [],
        errors: {
          years: false,
        },
      };
    case GET_YEARS_SUCCESS:
      return {
        ...state,
        years: action.payload,
        errors: {
          years: false,
        },
      };
    case GET_YEARS_ERROR:
      return {
        ...state,
        years: [],
        errors: {
          years: false,
        },
      };
    case GET_VERSIONS_START:
      return {
        ...state,
        versions: [],
        errors: {
          versions: false,
        },
      };
    case GET_VERSIONS_SUCCESS:
      return {
        ...state,
        versions: action.payload,
        errors: {
          versions: false,
        },
      };
    case GET_VERSIONS_ERROR:
      return {
        ...state,
        versions: [],
        errors: {
          versions: false,
        },
      };
    case GET_CAR_START:
      return {
        ...state,
        car: {},
        errors: {
          car: false,
        },
      };
    case GET_CAR_SUCCESS:
      return {
        ...state,
        car: action.payload,
        errors: {
          car: false,
        },
      };
    case GET_CAR_ERROR:
      return {
        ...state,
        car: {},
        errors: {
          car: false,
        },
      };
    default:
      return state;
  }
}

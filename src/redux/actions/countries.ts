import {
  FETCH_COUNTRIES_FROM_SAGA,
  FETCH_COUNTRIES_SUCCEED,
  FETCH_COUNTRIES_FAIL,
  Country,
  CountriesAction,
  Exception,
} from '../../types'

export function fetchCountriesFromSaga(): CountriesAction {
  return {
    type: FETCH_COUNTRIES_FROM_SAGA,
  }
}

export function fetchCountriesSucceed(countries: Country[]): CountriesAction {
  return {
    type: FETCH_COUNTRIES_SUCCEED,
    payload: {
      countries: countries,
    },
  }
}

export function fetchCountriesFail(exception: Exception): CountriesAction {
  return {
    type: FETCH_COUNTRIES_FAIL,
    payload: {
      exception: exception,
    },
  }
}

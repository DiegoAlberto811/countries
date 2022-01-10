import {
  CountriesAction,
  CountriesState,
  FETCH_COUNTRIES_SUCCEED,
  FETCH_COUNTRIES_FAIL,
} from '../../types'

function countriesReducer(
  state: CountriesState = {
    inCart: [],
    countries: [],
    exception: undefined,
  },
  action: CountriesAction
): CountriesState {
  switch (action.type) {
    case FETCH_COUNTRIES_SUCCEED: {
      const { countries } = action.payload
      return { ...state, countries: [...countries] }
    }

    case FETCH_COUNTRIES_FAIL: {
      const { exception } = action.payload
      return { ...state, exception: exception }
    }

    default:
      return state
  }
}

export default countriesReducer

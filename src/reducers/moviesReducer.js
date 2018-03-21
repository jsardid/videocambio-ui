import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE
} from "../constants/constants";
const initialState = {
  data: {
    moviesCollection: {},
    popular: [],
    new: []
  },
  dataFetched: false,
  isFetching: false,
  error: false
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        data: {
          moviesCollection: {},
          popular: [],
          new: []
        },
        isFetching: true
      };
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: {
          moviesCollection: action.data.reduce((map, obj) => {
            return (map[obj.id] = obj);
          }, {}),
          popular: action.data.slice().sort((a, b) => {
            return a.popularity < b.popularity
              ? 1
              : b.popularity < a.popularity ? -1 : 0;
          }),
          new: action.data.slice().sort((a, b) => {
            return a.release_date < b.release_date
              ? 1
              : b.release_date < a.release_date ? -1 : 0;
          })
        }
      };
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      };
    default:
      return state;
  }
}

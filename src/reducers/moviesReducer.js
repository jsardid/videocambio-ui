import {
  FETCHING_POPULAR,
  FETCHING_POPULAR_SUCCESS,
  FETCHING_NEW,
  FETCHING_NEW_SUCCESS
} from "../constants/constants";
const initialState = {
  moviesCollection: {},
  popularIndex: {
    isFetched: false,
    isFetching: false,
    index: []
  },
  newIndex: {
    isFetched: false,
    isFetching: false,
    index: []
  }
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_POPULAR:
      return {
        ...state,
        popularIndex: {
          isFetched: false,
          isFetching: true,
          index: []
        }
      };
    case FETCHING_POPULAR_SUCCESS:
      return {
        ...state,
        moviesCollection: Object.assign(
          {},
          state.moviesCollection,
          action.data.reduce((map, obj) => {
            map[obj.tmdb_id] = obj;
            return map;
          }, {})
        ),
        popularIndex: {
          isFetched: true,
          isFetching: false,
          index: action.data.map(movie => movie.tmdb_id)
        }
      };
    case FETCHING_NEW:
      return {
        ...state,
        newIndex: {
          isFetched: false,
          isFetching: true,
          index: []
        }
      };
    case FETCHING_NEW_SUCCESS:
      return {
        ...state,
        moviesCollection: Object.assign(
          {},
          state.moviesCollection,
          action.data.reduce((map, obj) => {
            map[obj.tmdb_id] = obj;
            return map;
          }, {})
        ),
        newIndex: {
          isFetched: true,
          isFetching: false,
          index: action.data.map(movie => movie.tmdb_id)
        }
      };
    default:
      return state;
  }
}

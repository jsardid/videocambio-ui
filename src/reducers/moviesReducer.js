import {
  FETCHING_POPULAR,
  FETCHING_POPULAR_SUCCESS,
  FETCHING_NEW,
  FETCHING_NEW_SUCCESS,
  FETCHING_MOVIE,
  FETCHING_MOVIE_SUCCESS,
  FETCHING_MOVIE_ERROR,
  SEARCHING,
  SEARCHING_SUCCESS
} from "../constants/constants";
const initialState = {
  moviesCollection: {},
  moviesStatus: {},
  popularIndex: {
    status: 'not_fetched',
    index: []
  },
  newIndex: {
    status: 'not_fetched',
    index: []
  },
  search: {
    resultsIndex: [],
    query: "",
    totalNumberResults: 0,
    isSearching: false,
    isPaginating: false
  }
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_POPULAR:
      return {
        ...state,
        popularIndex: {
          status: 'fetching',
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
        moviesStatus: Object.assign(
          {},
          state.moviesStatus,
          action.data.reduce((map, obj) => {
            map[obj.tmdb_id] = { status: "fetched" };
            return map;
          }, {})
        ),
        popularIndex: {
          status: 'fetched',
          index: action.data.map(movie => movie.tmdb_id)
        }
      };
    case FETCHING_NEW:
      return {
        ...state,
        newIndex: {
          status: 'fetching',
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
        moviesStatus: Object.assign(
          {},
          state.moviesStatus,
          action.data.reduce((map, obj) => {
            map[obj.tmdb_id] = { status: "fetched" };
            return map;
          }, {})
        ),
        newIndex: {
          status: 'fetched',
          index: action.data.map(movie => movie.tmdb_id)
        }
      };
    case FETCHING_MOVIE:
      return {
        ...state,
        moviesStatus: {
          ...state.moviesStatus,
          [action.movieId]: { status: "fetching" }
        }
      };
    case FETCHING_MOVIE_SUCCESS:
      return {
        ...state,
        moviesCollection: {
          ...state.moviesCollection,
          [action.data.tmdb_id]: action.data
        },
        moviesStatus: {
          ...state.moviesStatus,
          [action.data.tmdb_id]: { status: "fetched" }
        }
      };
    case FETCHING_MOVIE_ERROR:
      return {
        ...state,
        moviesStatus: {
          ...state.moviesStatus,
          [action.movieId]: {
            status: "error",
            error: action.error
          }
        }
      };
    case SEARCHING:
      return {
        ...state,
        search: {
          query: action.query,
          resultsIndex: [],
          totalNumberResults: 0,
          isSearching: true,
          isPaginating: false
        }
      };
    case SEARCHING_SUCCESS:
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
        moviesStatus: Object.assign(
          {},
          state.moviesStatus,
          action.data.reduce((map, obj) => {
            map[obj.tmdb_id] = { status: "fetched" };
            return map;
          }, {})
        ),
        search: {
          ...state.search,
          resultsIndex: state.search.resultsIndex.concat(
            action.data.map(movie => movie.tmdb_id)
          ),
          totalNumberResults: 0,
          isSearching: false,
          isPaginating: false
        }
      };

    default:
      return state;
  }
}

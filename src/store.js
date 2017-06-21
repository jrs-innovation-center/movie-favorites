import { createStore, combineReducers } from 'redux'
import { merge } from 'ramda'

const store = createStore(
  combineReducers({
    favorites: function(state = [], action) {
      switch (action.type) {
        case 'SET_FAVORITES':
          return action.payload
        default:
          return state
      }
    },
    favorite: function(state = { name: '', poster: '', rank: '' }, action) {
      switch (action.type) {
        case 'SET_FAVORITE':
          return action.payload
        case 'SET_FAVORITE_NAME':
          return merge(state, { name: action.payload })
        case 'SET_FAVORITE_POSTER':
          return merge(state, { poster: action.payload })
        case 'SET_FAVORITE_RANK':
          return merge(state, { rank: action.payload })
        default:
          return state
      }
    },
    selectedMovie: function(state = {}, action) {
      switch (action.type) {
        case 'SET_SELECTED_MOVIE':
          return action.payload
        default:
          return state
      }
    },
    searchCriteria: function(state = '', action) {
      switch (action.type) {
        case 'SET_CRITERIA':
          return action.payload
        case 'CLEAR_CRITERIA':
          return ''
        default:
          return state
      }
    },
    searchResults: function(state = [], action) {
      switch (action.type) {
        case 'SET_RESULTS':
          return action.payload
        default:
          return state
      }
    }
  })
)

export default store

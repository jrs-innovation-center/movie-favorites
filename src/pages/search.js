import React from 'react'
import Button from '../components/button'
import TextField from '../components/text-field'
import { connect } from 'react-redux'
import { map } from 'ramda'
import { Link } from 'react-router-dom'
import fetch from 'isomorphic-fetch'

const setCriteraUrl = function(criteria) {
  return `https://www.omdbapi.com/?apikey=21d70f1a&s=${criteria}&y=&plot=full&r=json`
}
const mapStateToProps = function(state) {
  return {
    searchResults: state.searchResults,
    searchCriteria: state.searchCriteria
  }
}
const connector = connect(mapStateToProps)

const Search = function(props) {
  return (
    <div className="pa4">
      <h2>Find Movies</h2>
      <form
        onSubmit={function(event) {
          event.preventDefault()
          fetch(setCriteraUrl(props.searchCriteria))
            .then(function(res) {
              return res.json()
            })
            .then(function(movieResults) {
              if (movieResults.Response === 'False') {
                return alert(movieResults.Error)
              }
              props.dispatch({
                type: 'SET_RESULTS',
                payload: movieResults.Search
              })
              props.dispatch({
                type: 'CLEAR_CRITERIA'
              })
            })
        }}
      >
        <TextField
          label="Search"
          description="Enter name of favorite movie"
          value={props.searchCriteria}
          onChange={function(value) {
            props.dispatch({
              type: 'SET_CRITERIA',
              payload: value
            })
          }}
        />
        <Button>Search</Button>
      </form>
      <ul>
        {map(function(movieResult) {
          return (
            <li key={movieResult.imdbID}>
              <Link to={`/movies/${movieResult.imdbID}`}>
                {movieResult.Title}
              </Link>
            </li>
          )
        }, props.searchResults)}
      </ul>
    </div>
  )
}

export default connector(Search)

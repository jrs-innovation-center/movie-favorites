import React from 'react'
import fetch from 'isomorphic-fetch'
import { connect } from 'react-redux'
import Button from '../components/button'
import { Link } from 'react-router-dom'

const setUrl = function(id) {
  return `https://www.omdbapi.com/?apikey=21d70f1a&i=${id}&y=&plot=full&r=json`
}

const connector = connect(function(state) {
  return state
})

class Show extends React.Component {
  componentDidMount() {
    const props = this.props
    const imdbID = props.match.params.imdbID
    fetch(setUrl(imdbID))
      .then(function(res) {
        return res.json()
      })
      .then(function(body) {
        props.dispatch({
          type: 'SET_SELECTED_MOVIE',
          payload: body
        })
      })
      .catch(function(err) {
        console.log(err)
      })
  }
  render() {
    const props = this.props
    const { Title, Year, Plot, Poster } = props.selectedMovie
    return (
      <div className="pa4">
        <div className="measure">
          <Link to="/favorites/new"><Button>Add</Button></Link>
          <Link to="/search"><Button>Back</Button></Link>
        </div>
        <h1>{Title}</h1>
        <p>{Year}</p>
        <p>{Plot}</p>
        <img alt={Title} src={Poster} />
        <pre>{JSON.stringify(props.selectedMovie, null, 2)}</pre>
      </div>
    )
  }
}

export default connector(Show)

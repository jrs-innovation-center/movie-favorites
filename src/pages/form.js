import React from 'react'
import { connect } from 'react-redux'
import TextField from '../components/text-field'
import Button from '../components/button'
import fetch from 'isomorphic-fetch'

const url = `http://localhost:4000/favorites`

class Form extends React.Component {
  componentDidMount() {
    const props = this.props
    console.log(props.selectedMovie)
    props.dispatch({
      type: 'SET_FAVORITE',
      payload: {
        name: props.selectedMovie.Title,
        poster: props.selectedMovie.Poster,
        rank: '100'
      }
    })
  }
  render() {
    const props = this.props

    return (
      <div className="pa4">
        <h2>Add to Favorites</h2>
        <form
          className="measure"
          onSubmit={function(event) {
            event.preventDefault()
            fetch(url, {
              method: 'POST',
              headers: new Headers({ 'Content-Type': 'application/json' }),
              body: JSON.stringify(props.favorite)
            })
              .then(function(res) {
                return res.json()
              })
              .then(function(body) {
                console.log(body)
                props.history.push('/')
              })
          }}
        >
          <TextField
            label="Name"
            description="Movie Name"
            value={props.favorite.name}
            onChange={function(value) {
              return props.dispatch({
                type: 'SET_FAVORITE_NAME',
                payload: value
              })
            }}
          />
          <TextField
            label="Poster"
            description="Movie Poster Link"
            value={props.favorite.poster}
            onChange={function(value) {
              return props.dispatch({
                type: 'SET_FAVORITE_POSTER',
                payload: value
              })
            }}
          />
          <TextField
            label="Ranking"
            description="Movie Rank (1 - 100)"
            value={props.favorite.rank}
            onChange={function(value) {
              return props.dispatch({
                type: 'SET_FAVORITE_RANK',
                payload: value
              })
            }}
          />

          <Button>Save</Button>
        </form>
      </div>
    )
  }
}

const connector = connect(function(state) {
  return state
})

export default connector(Form)

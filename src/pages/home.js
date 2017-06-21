import React from 'react'
import Button from '../components/button'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { map } from 'ramda'

const url = 'http://localhost:4000/favorites'

class Home extends React.Component {
  componentDidMount() {
    const props = this.props
    fetch(url)
      .then(function(res) {
        return res.json()
      })
      .then(function(favorites) {
        props.dispatch({
          type: 'SET_FAVORITES',
          payload: favorites
        })
      })
  }
  render() {
    const props = this.props
    return (
      <div className="pa4 measure">
        <Link to="/search">
          <Button>Search</Button>
        </Link>
        <h2>Favorites</h2>
        <ul>
          {map(function(favorite) {
            return <li key={favorite.id}>{favorite.name}</li>
          }, props.favorites)}
        </ul>
      </div>
    )
  }
}

const connector = connect(function(state) {
  return state
})

export default connector(Home)

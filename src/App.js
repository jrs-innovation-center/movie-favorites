import React from 'react'
import Home from './pages/home'
import Search from './pages/search'
import Show from './pages/show'
import Form from './pages/form'

import { BrowserRouter, Route } from 'react-router-dom'

const App = function() {
  return (
    <BrowserRouter>
      <div>
        <header className="pv2 ph4 bg-purple white-80 avenir">
          <h1>Movie Favorites</h1>
        </header>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/movies/:imdbID" component={Show} />
        <Route path="/favorites/new" component={Form} />
      </div>
    </BrowserRouter>
  )
}

export default App

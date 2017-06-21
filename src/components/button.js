import React from 'react'

const Button = function(props) {
  return (
    <div className="fr">
      <button className="f4 link dim br2 ph3 pv2 mb2 dib white bg-purple">
        {props.children}
      </button>
    </div>
  )
}

export default Button

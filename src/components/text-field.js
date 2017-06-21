import React from 'react'

const TextField = function(props) {
  return (
    <div className="measure">
      <label className="f6 b db mb2">{props.label}</label>
      <input
        value={props.value}
        onChange={function(event) {
          props.onChange(event.target.value)
        }}
        className="input-reset ba b--black-20 pa2 mb2 db w-100"
        type="text"
      />
      <small className="f6 black-60 db mb2">
        {props.description}
      </small>
    </div>
  )
}

export default TextField

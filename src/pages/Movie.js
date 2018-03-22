import React from 'react'

export const Movie = (props) => {
  return (
    <div>
      <h1>{props.match.params.number}</h1>
    </div>
  )
}


import React from 'react'

export default function Defaultpropsfun(props) {
  return (
    <div>
    <h1>My name is {props.name} and i am studying in {props.college}</h1>
    </div>
  )
}
Defaultpropsfun.defaultProps={college:"sssss"}


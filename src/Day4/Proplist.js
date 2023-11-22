import React from 'react'

function Demo(props)
{
    return(
    <div>
        <h1>My name is {props.name}</h1>
    </div>)
}

export default function Props(){
    const List=["wert","rtyu","edfghj"];
  return (
    <div>
      {List.map((item)=><Demo name={item}></Demo>)}
    </div>
  )
}
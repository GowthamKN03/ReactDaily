import React from 'react'

export default function Na({studname}) {
    if(studname==="gowtham")
    {
        throw new Error("gowtham is not acceptable")
    }
  return (
    <div>
      <h1>"My name is{studname}</h1>
    </div>
  )
}

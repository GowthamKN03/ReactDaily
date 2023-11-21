import React,{useEffect,useState} from 'react'

export default function UseEff() {
    const[name,setName]=useState("Amreth");
    useEffect(()=>
    {
        setTimeout(()=>
        {
            setName("Sachin");
        },3000)
    })
  return (
    <div>
        {name}
    </div>
  )
}
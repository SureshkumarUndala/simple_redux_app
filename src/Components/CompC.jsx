import React from 'react'
import { useSelector } from 'react-redux'


const CompC = () => {
    
    const value = useSelector((state)=>state.value)
 
  return (
    <div style={{padding:"20px",boxShadow:"1px 2px 5px black", height:"100px"}}>
        <h2>Component C</h2>
        <p style={{color:"blue", fontWeight:"bolder", fontSize:"20px"}}>{value}</p>
    </div>
  )
}

export default CompC
import React from 'react'
import { useDispatch } from 'react-redux'



const CompB = () => {

const dispatch = useDispatch()


 const changeHandler = (e)=>{
    dispatch({type:"change_value", payload:e.target.value})
 }

  return (
    <div style={{ marginBottom:"50px", padding:"20px", boxShadow:"1px 2px 5px grey"}}>
        <h2>ComponentB</h2>
        <input placeholder='Please Type Something' onChange={changeHandler} style={{padding:"10px", width:"250px"}}/>
    </div>
  )
}

export default CompB
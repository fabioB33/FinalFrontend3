
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useContextGlobal } from '../Components/utils/global.context';


const Detail = () => {
  const { theme } = useContextGlobal();
  const [state, setState] = useState({})
  const { id } = useParams();
  const navigate = useNavigate();
 
  
const getDentist = async()=>{
  
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json()
    setState(data)
   
}

useEffect(()=>{
    getDentist()
},[])


  return (
    <div style={{ background: theme.background, color:theme.color}}>
      <h1>Detail Dentist id </h1>
      
         <p>{state.name}</p>
         <p>{state.email}</p>
         <p>{state.phone} </p>
          <p>{state.website} </p>  
      <button onClick={()=>navigate(-1)}>Go back</button>
      
    </div>
  )
}

export default Detail







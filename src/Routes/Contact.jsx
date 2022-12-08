import React from 'react'
import Form from '../Components/Form'
import { useContextGlobal } from '../Components/utils/global.context';


const Contact = () => {
  const {  theme } = useContextGlobal();
  
  return (
    <div style={{ background: theme.background, color:theme.color}}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
     
    </div>
  )
}

export default Contact
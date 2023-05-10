import React, { useEffect, useState } from 'react'
import './Scroll.css'
import axios from "axios";
import Data from '../../atom/data/Data'






const URL = " https://reqres.in/api/users/";
 
const Scroll = () => {
    const [Get, setGet] = useState([]);

    
     

     const  Axisogettingdata =  () => {

        axios.get(URL).then((responce) => 
        setGet(responce.data.data) )
          
          
     }
     
     
     useEffect(()=>{
        Axisogettingdata()
     },[])
 
  return (
   
    <div className='outerbox'>
        <Data  Get={Get}/>
      
     
    </div>
    
  )
}

export default Scroll;
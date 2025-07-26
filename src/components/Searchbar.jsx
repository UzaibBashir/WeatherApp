import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { cityContext } from '../context';




const Searchbar = () => {
    const obj = useContext(cityContext);
    const city = obj.city;

    const result = (e)=>{
        const value = e.target.value;
        obj.setCity(value);

    }
    
  return (
    <div className=''>
      <input className='text-white my-6 mx-18 p-8 border-1 border-blue-500 rounded-full' type="text" placeholder='Enter City'   onChange={result} />
        
    </div>
  )
}

export default Searchbar

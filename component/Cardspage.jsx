import React, { useContext, useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { FlagContext } from '../contexts/FlagContext';
import { DataCon } from '../contexts/DataCon';


export default function Cardspage() {

  const [data,setData]=useState([]);
  
  const [[query,setQuery],[seco,setSeco]]=useContext(DataCon);

  useEffect(()=>{
  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(res1=>setData(res1))

  
  },[]);
  
  //console.log(data1);
  return (

    <div className='cardpage center m-2'>
      {
        data.filter((e)=>seco?(e.category==query):(e.title.toLowerCase().includes(query))
      ).map((data1)=>
        
            <ProductCard 
            id={data1.id}
            image={data1.image}
            title={data1.title}
            description={data1.description} 
            price={data1.price}
            key={data1.id}
            />
         )
        }
    </div>
        
  )
}

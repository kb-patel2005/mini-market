import React, { useContext, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { DataCon } from '../contexts/DataCon';
import { FlagContext } from '../contexts/FlagContext';
import { Link } from 'react-router';

export default function Things() {
  
  const [[query,setQuery],[seco,setSeco]]=useContext(DataCon);
  
  return (
   
    <nav className='nav'>
            <Link to='/' onClick={()=>{
            setQuery("women's clothing")&setSeco(true);
            }}>
              women's clothes
            </Link>
      
            <Link to='/' onClick={()=>{
            setQuery("men's clothing")&setSeco(true);
            }}>
              men clothes
            </Link>
     
            <Link to='/' onClick={()=>{
            setQuery("electronics")&setSeco(true);
            }}>
              electronics
            </Link>

          <Link to='/' onClick={()=>{
            setQuery("jewelery")&setSeco(true)
            }}>
              jewellery
            </Link>
    
      </nav>
  
  )
}

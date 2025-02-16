import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export default function CardDetail() {
  const [product,setProduct]=useState([])
  
  const id=new URLSearchParams(location.search).get('id');
  useEffect(()=>{
  fetch(`https://fakestoreapi.com/products/${id}`)
  .then((res)=>res.json())
  .then((data)=>setProduct(data));
  },[])
  return (
  <>
    <div className='d-flex' style={{flexWrap:'wrap',margin:'10px',justifyContent:'center'}}> 
    <div>
    <Container >
      <Row>
        <Col>
          <Image src={product.image} style={{width:'300px'}} rounded />
        </Col>
      </Row>
    </Container>
    </div>
    
    <div>
      <h3><u>{product.title}</u></h3>
      <p><b>price:${product.price}</b></p>
      <p>description:  {product.description}</p>
      <p>category:{product.category}</p>
    </div>
    </div>
    </>
    )
}
  


import React from 'react';
import Card from 'react-bootstrap/Card';
import '../app.css';


export default function ProductCard({id,image,title,price,description}) {
  return (
  <div className='proCard p-2'>
  <a href={`/CardDetail?id=${id}`} className='a m-2'>  
    <Card style={{width:'18rem',height:'35rem'}} className='center'>
    <Card.Img variant="top" src={image} style={{height:'300px',overflow:'hidden'}}/>
    <hr/>
    <Card.Body>
      <Card.Title>{title.slice(0,35)} ...</Card.Title>
      <Card.Text>price:${price}</Card.Text>
      <Card.Text>
      {description.slice(0, 50)} more..
      </Card.Text>
    </Card.Body>
  </Card>
  </a>
  </div>
  )
}

import React from 'react'
import {Col, Row,Card} from "react-bootstrap";
const ItemList = ({itemsData}) => {
  return (
    
    <Row>
      {
        
        itemsData.length >=1 ? (itemsData.map((item)=>{
          return(
            <Col key={item.id} sm='12' className='mb-3'>
              <Card className='d-flex flex-row' style={{backgroundcolor:'#F8F8F8'}}>
                <Card.Img className='img-item' variant="top" src={item.imgUrl} style={{width:252}}/>
                <Card.Body>
                  <Card.Title className='d-flex justify-content-between'>
                    <div className='item-title'>{item.title}</div>
                    <div className='item-price'>{item.price}</div>
                  </Card.Title>
                  <Card.Text className='py-2'>
                    <div className='item-description'>{item.description}</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )
        })):<h3>there is no food </h3>
        
      }
        
    </Row>
  )
}

export default ItemList
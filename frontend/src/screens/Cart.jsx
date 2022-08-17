import React,{ useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Form, Button, Card, Alert } from 'react-bootstrap'
const Cart = ({ history }) => {
  const[cartItems,setCartItems]=useState(JSON.parse( localStorage.getItem('cartItems')))
 
  console.log(cartItems);
  
const removeFromCartHandler=(id)=>{
  const result = cartItems.filter(item=>item.id!=id);
  localStorage.setItem("cartItems",JSON.stringify(result))
  setCartItems(result)
  console.log(result);
}


  return (
    <Row>
      <Col md={8}>
      <h1>Shopping Cart</h1>
      {!cartItems?(
        <Alert variant="danger">Your cart is empty <Link to='/'>Go Back</Link></Alert>
      ):(
        <ListGroup variant='flush'>
          {cartItems.map((item)=>(
             <ListGroup.Item key={item.id}>
              <Row>
                <Col md={2}>
                <Image src={item.image} alt={item.name} fluid rounded />
                </Col>
                <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                 
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler(item.id)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
              </Row>
             </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      </Col>
      {cartItems?(
        <Col md={4} className="my-3">
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items
              </h2>
              $
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/payment">
              
              <Button
                type='button'
                className='btn-block'
                disabled={cartItems.length === 0}
              >
                Proceed To Checkout
              </Button>
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
      ):<></>}
    </Row>
  )
}

export default Cart
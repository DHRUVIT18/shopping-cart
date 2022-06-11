import React from 'react'
import { Container, Navbar,Form, DropdownButton,Dropdown, Nav, Badge, Button } from 'react-bootstrap'
import {FaShoppingCart} from "react-icons/fa"
import { Link } from 'react-router-dom'
import { CartState } from '../context/Context'
import {AiFillDelete} from 'react-icons/ai'

const Header = () => {

const {state:{cart},dispatch,productdispatch}  = CartState();



  return (
    <Navbar bg="dark" variant='dark'
    style={{height:80}}>
        <Container>
          <Navbar.Brand> 
              <Link to='/'>Shopping Cart</Link>
          </Navbar.Brand>
          <Navbar.Text className='search'>
          <Form.Control 
          type="text" 
          placeholder="Search a Product" 
          style={{width:500}}
          className=',-auto' 
          onChange={(e)=>{
            productdispatch({
              type:"FILTER_BY_SEARCH",
              payload:e.target.value,
            })
          }}
          />
          </Navbar.Text>
          <Nav>

          <Dropdown alignRight className='dd'>
            <Dropdown.Toggle variant='success'>
            <FaShoppingCart color='white' fontSize="25px" />
            <Badge bg="none">{cart.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{minWidth:350}}>

              {cart.length>0?(
                <>
                {
                  cart.map(prod=>{
                  return  <span className='cartitem' key={prod.id}>
                      <img
                      src={prod.image}
                      className='cartitemimg'
                      alt={prod.name}
                      />

                      <div className='cartitemdetail'>
                        <span>{prod.name}</span>
                        <span>₹ {prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                      fontSize="20px"
                      style={{cursor:"pointer"}}
                      onClick={()=>{
                        dispatch({
                          type:"REMOVE_FROM_CART",
                          payload:prod,
                        })
                      }}/>

                    </span>
                  })
                }
                <Link to='/cart'>
                  <Button style={{width:"95%",margin:"0 10px"}}>
                    Go to Cart
                  </Button>
                </Link>
                </>
              ):(
                <span style={{padding:10}}>
                    Cart is Empty!
                </span>
              )}

                
            </Dropdown.Menu>


            {/* <DropdownButton
           title= {
               <>
           <FaShoppingCart color='white' fontSize="25px" />
           <Badge bg="none">{10}</Badge>
           </>
        }
          variant="success">
          
          <Dropdown.Item style={{minWidth:370}} >Cart is Empty!</Dropdown.Item>
    
         
        </DropdownButton> */}



          
        </Dropdown>


          </Nav>

        


        </Container>

    </Navbar>
  )
}

export default Header
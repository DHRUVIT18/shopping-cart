import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { CartState } from '../context/Context';
import Rating from './Rating';

const Filters = () => {

    
   const {productstate:{bystock,byfastdelivery,sort,byrating,},productdispatch} =   CartState();


  return (
    <div className='filters'>
        <span className='title'>Filter Products</span>
        <span>
        <Form.Check
         inline
         label="Ascending"
         name="group1"
         type='radio'
         id={'inline-1'}
         onChange={()=>
        productdispatch({
          type:"SORT_BY_PRICE",
          payload:"lowToHigh",
        })
        }
        checked={sort==="lowToHigh"?true:false}
         />

        </span>


        <span>
        <Form.Check
         inline
         label="Descending"
         name="group1"
         type='radio'
         id={'inline-2'}
         onChange={()=>
          productdispatch({
            type:"SORT_BY_PRICE",
            payload:"HightoLow",
          })
          }
          checked={sort==="HightoLow"?true:false}
         />

        </span>

        <span>
        <Form.Check
         inline
         label="Include Out of Stock"
         name="group1"
         type='checkbox'
         id={'inline-3'}
         onChange={()=>
          productdispatch({
            type:"FILTER_BY_STOCK",
            
          })
          }
          checked={bystock}
         />

        </span>

        <span>
        <Form.Check
         inline
         label="Fastest Delivery Only"
         name="group1"
         type='checkbox'
         id={'inline-4'}
         onChange={()=>
          productdispatch({
            type:"SORT_BY_DELIVERY",
           
          })
          }
          checked={byfastdelivery}
         />

        </span>


        <span>
        <label style={{paddingRight:10}}>Rating: </label>
        <Rating rating={byrating} 
        onClick={(i)=>
          productdispatch({
            type:"FILTER_BY_RATING",
            payload:i+1,
          })
        } 
        style={{cursor:"pointer"}}/>
        </span>
        <Button variant='light'
        onClick={()=>
        productdispatch({
          type:"CLEAR_FILTERS",
        })
        }
        >
          Clear Filters</Button>
         
    </div>
  )
}

export default Filters
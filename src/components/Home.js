import React from 'react'
import { CartState } from '../context/Context'
import Filters from './Filters';
import SingleProduct from './SingleProduct';
import './styles.css'
const Home = () => {

const {state:{products},productstate:{bystock,byfastdelivery,sort,byrating,searchquery}}  = CartState();
//console.log(products);
const transformproducts = ()=>{
  let sortedproducts=products;
  if(sort){
    sortedproducts=sortedproducts.sort((a,b)=>(
      sort=='lowToHigh'?a.price-b.price:b.price-a.price
    ));
  }
  if(!bystock){
    sortedproducts=sortedproducts.filter((prod)=>(prod.inStock));
  }

  if(byfastdelivery){
    sortedproducts=sortedproducts.filter((prod)=>prod.fastDelivery)
  }

  if(byrating){
    sortedproducts=sortedproducts.filter(
      (prod)=>prod.ratings >=byrating
    )
  }

  if(searchquery){
    sortedproducts=sortedproducts.filter((prod)=>
    prod.name.toLowerCase().includes(searchquery)
    );
  }




  return sortedproducts;
}

  return (
    <div className='home'>
        <Filters/>
        <div className='productcontainer'>
            {
                transformproducts().map((prod)=>{
                   return <SingleProduct prod={prod} key={prod.id} />

                   
                })
            }
        </div>

    </div>
  )
}

export default Home
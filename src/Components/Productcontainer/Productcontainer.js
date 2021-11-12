import React from 'react'
import Product from '../Product/Product';
import { CartState } from '../../Context/Context';
const Productcontainer = () => {
    const {
        state:{products},
        productState: {searchQuery},
    } = CartState()
    
    const transform = () =>{
        let sortedProducts = products;
        if (searchQuery){
            sortedProducts = sortedProducts.filter((prod) => prod.name.toLowerCase().includes(searchQuery))

        }
        return sortedProducts;
    }

    return (
        <div className="category__container" data-aos="fade-up" data-aos-duration="1200">
          <div className="category__center">
              {transform().map((prod) => {
                  return <Product key = {prod.id} prod ={prod}></Product>
              })}
          </div>
        </div>
    )
}

export default Productcontainer

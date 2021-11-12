import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CompareIcon from '@material-ui/icons/Compare';
import { CartState } from '../../Context/Context';


const Product = ({prod}) => {
    const {
      state:{cart},
      dispatch,
    } = CartState()
    return (
          <div className="product category__products">
                <div className="product__header">
                  <img src={prod.image} alt="product"/>
                </div>
                <div className="product__footer">
                  <h3>{prod.text}</h3>
                  <div className="product__price">
                    <h4>{prod.price}</h4>
                  </div>
                  {cart.some((p) => p.id === prod.id)? (
                   <button type="submit" className="product__btn" onClick ={()=> dispatch({type:"REMOVE_FROM_CART",payload: prod})}>Remove from Cart</button>)
                  :(
                  <button type="submit" className="product__btn" onClick= {()=>dispatch({type:"ADD_TO_CART",payload:prod})}>Add To Cart</button>)}
                </div>
              <ul>
                  <li>
                    <a data-tip="Quick View" data-place="left" href="#">
                      <VisibilityIcon></VisibilityIcon>
                    </a>
                  </li>
                  <li>
                    <a data-tip="Add To Wishlist" data-place="left" href="#">
                      <FavoriteIcon></FavoriteIcon>
                    </a>
                  </li>
                  <li>
                    <a data-tip="Add To Compare" data-place="left" href="#">
                      <CompareIcon></CompareIcon>
                    </a>
                  </li>
              </ul>
              </div>
      
    )
}

export default Product

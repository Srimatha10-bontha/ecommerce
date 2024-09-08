import React, { useContext } from 'react'
import './Css/ShopCategory.css'
import { Shopcontext } from '../Context/Shopcontext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from'../Components/Items/Items'

const Shopcategory = (Props) => {
  const{all_product}=useContext(Shopcontext)
  return (
    <div className='shop-category'>
      <img  className='shopcategory-banner' src={Props.banner} alt=""/>
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-12</span>Out Of 36 Products
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={dropdown_icon} alt=""/>
        </div>
      </div>
      <div className='shopcategory-products'>
        {all_product.map((item,i)=>{
          if(Props.category===item.category){
            return <Item key={i} id={item.id} name={item.name}image={item.image} new_price={item.new_price} old_price={item.old_price}/>

          }
          else{
            return null;
          }

        })}

      </div>
      <div className='shopcategory-loadmore'>
        Explore More
      </div>
      
    </div>
  )
}

export default Shopcategory

import React, { useState } from 'react'
import "./product.css"
import ProductDetail from "./productdetail"
import { BsEye } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import {  AiOutlineCloseCircle } from 'react-icons/ai';
const Product = ({product, setProduct,detail,view,close,setClose,addToCard}) => {
  

  const filterProduct = (val) => { 

    const update = ProductDetail.filter((x) =>
    {return x.Cat === val}
     
    )
    setProduct(update)
   }


   const AllProduct = (val) => { 

    if(val===""){
      setProduct(ProductDetail)
    }

    }


  return (
    <>
    {
      close ?  <div className="product_detail">
      <div className="container">
        <button className='closebtn' onClick={()=>setClose(false)}><AiOutlineCloseCircle/></button>
      
           {detail.map((item)=>
           {
           return <div className="productbox">
            <div className="img-box">
              <img src={item.Img} alt={item.Title} />
            </div>
            <div className="detail">
              <h4>{item.Cat}</h4>
              <h2>{item.Title}</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, rem?</p>
              <h3>{item.Price}</h3>
              <button>Add To Card</button>
            </div>
             </div>
           }
           
           )}
       
      </div>
    </div>
    : null
    }
   
   
    <div className="products">
    <h2># Products</h2>
    <p>Home . products</p>
      <div className="container">
        <div className="filter">
          <div className="categories">
            <h3 >categories</h3>
            <ul>
            <li onClick={()=>AllProduct("")}>All Products</li>
              <li onClick={()=>filterProduct("Tablet")}>Tablet</li>
              <li onClick={()=>filterProduct("Smart Watch")}  >Smart Watch</li>
              <li onClick={()=>filterProduct("Headphone")}>Headphone</li>
              <li onClick={()=>filterProduct("Camera")}>Camera</li>
              <li onClick={()=>filterProduct("Gaming")}>Gaming</li>
             
            </ul>
          </div>
          <div className="productbox">
            <div className="contant">
              {product.map((item)=>
                <div key={item.id} className="box">
                <div className="img_box">
                  <img src={item.Img} alt={item.Title} />
                  <div className="icon">
                    <li onClick={()=> addToCard(item)}><AiOutlineShoppingCart /></li>
                    <li onClick={()=> view(item)} ><BsEye /></li>
                <li><AiOutlineHeart /></li>  
                  
                  
                  </div>
                </div>
                <div className="detail">
                  <p>{item.Cat}</p>
                  <h3>{item.Title}</h3>
                  <h4>{item.Price}</h4>
                </div>
          </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Product
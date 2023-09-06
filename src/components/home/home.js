import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';
import "./home.css"
import { FiTruck } from 'react-icons/fi';
import { BsCurrencyDollar } from 'react-icons/bs';
import { CiPercent } from 'react-icons/ci';
import { BiHeadphone } from 'react-icons/bi';
import HomeProduct from "../product/homeproduct"
import { AiOutlineShoppingCart, AiOutlineCloseCircle } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';

const Home = ({detail,close ,setClose,view}) => {

  const [homeProduct, setHomeProduct] = useState(HomeProduct)


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
    <div className="top_banner">
        <div className="container">
            <div className="detail">
                <h2>The Best Note Book Colletion 2023</h2>
                <Link className='link' to="/product">Shop Now <BsArrowRight /></Link>

            </div>
            <div className="img_box">
                <img src="./img/slider-img.png" alt="sliderimg" />
            </div>
        </div>
    </div>
    <div className="product_type">
        <div className="container">
        <div className='box'>
          <div className='img_box'>
            <img src='./img/Mobile Phone.png' alt='mobile'></img>
          </div>
          <div className='detail'>
            <p>23 products</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/smart watch.png' alt='watch'></img>
          </div>
          <div className='detail'>
            <p>18 products</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/headphone.png' alt='headphone'></img>
          </div>
          <div className='detail'>
            <p>52 products</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/cpu heat.jpg' alt='cpu '></img>
          </div>
          <div className='detail'>
            <p>63 products</p>
          </div>
        </div>
        </div>
    </div>
    <div className="about">
        <div className="container">
        <div className='box'>
          <div className='icon'>
            <FiTruck />
          </div>
          <div className='detail'>
            <h3>Free Shipping</h3>
            <p>Oder above $1000</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon'>
            <BsCurrencyDollar />
          </div>
          <div className='detail'>
            <h3>Return & Refund</h3>
            <p>Money Back Gaurenty</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon'>
            <CiPercent />
          </div>
          <div className='detail'>
            <h3>Member Discount</h3>
            <p>On every Oder</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon'>
            <BiHeadphone />
          </div>
          <div className='detail'>
            <h3>Customer Support</h3>
            <p>Every Time Call Support</p>
          </div>
        </div>

        </div>
    </div>
    <div className="product">
      <h2>Top Products</h2>
        <div className="container">
          {homeProduct.map((item)=> 
          <div key={item.id} className="box">
                <div className="img_box">
                  <img src={item.Img} alt={item.Title} />
                  <div className="icon">
                    <li><AiOutlineShoppingCart /></li>
                    <li onClick={()=>view(item)}><BsEye /></li>
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
    <div className="banner">
      <div className="container">
      <div className="detail">
        <h4>LATEST TECHNOLOGY ADDED</h4>
        <h3>Apple ipad 10.2 9th Gen - 2021</h3>
        <p><BsCurrencyDollar/>986</p>
        <Link to="/product" className='link'>Shop Now <BsArrowRight /></Link>
      </div>
      <div className="img_box">
        <img src="./img/slider-img.png" alt="sliderimg" />
      </div>
      </div>
    
    </div>
    </>
  )
}

export default Home
import React from "react";
import "./nav.css";
import { FaTruckMoving } from "react-icons/fa";
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { CiLogin } from 'react-icons/ci';
import { CiLogout } from 'react-icons/ci';
import { useAuth0 } from "@auth0/auth0-react";
const Nav = () => {

    const { loginWithRedirect,logout,user, isAuthenticated } = useAuth0();


  return (


    
    <>
      <div className="free">
     
          <div className="icon">
            <FaTruckMoving />
          </div>
          <p>FREE Shipping when shopping upto $1000</p>
        
      </div>
      <div className="main_header">
        <div className="container">
            <div className="logo">
                <img src="./img/logo.svg" alt="" />
            </div>
            <div className="search-box">
                <input type="text" value="" placeholder="Enter The Product Name" autoComplete="off" />
                <button className="search">Search</button>
            </div>
            <div className="icon">
                {
                    isAuthenticated && 
                    (
                        <div className="account">
                        <div className="user_icon">
                        <AiOutlineUser />
                        </div>
                <p>Hello, {user.name} </p>
                    </div>
                    )
                }
              
                <div className="second_icon">
               <Link to="/" className="link"><AiOutlineHeart /></Link> 
           <Link to="/cart" className="link"><BsBagCheck /></Link> 
                </div>
          
            </div>

        </div>
      </div>
      <div className="header">
        <div className="container">
            <div className="nav">
            <ul>
                <li>
                    <Link className="link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="link" to="/product" >Product</Link>
                </li>
                <li>
                    <Link className="link" to="/about" >About</Link>
                </li>
                <li>
                    <Link className="link" to="/contact" >Contact</Link>
                </li>
            </ul>
            </div>
           
            <div className="auth">
                {
                    isAuthenticated ?
                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><CiLogout /></button>
                    :
                    <button onClick={() => loginWithRedirect()}><CiLogin /></button>

                }
            
          
            </div>
        </div>
      </div>
    </>
  );
};

export default Nav;

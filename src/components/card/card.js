import React from 'react'
import "./card.css"
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai';
const Card = ({card,setCard}) => {
  return (
    <>
    <div className="cartcontainer">
   {card.length === 0 && <div className="emptycart">
    <h2 className="empty">
        Card is empty
    </h2>
    <Link className='emptycartbtn' to="/product">Shop Now</Link>
</div>}


<div className="contant">
    {card.map((item)=>
    <div key={item.id} className="card_item">
        <div className="img_box">
            <img src={item.Img} alt={item.Title} />
        </div>
        <div className="detail">
            <h4>{item.Cat}</h4>
            <h3>{item.Title}</h3>
            <p>{item.Price}</p>
            <button><AiOutlineClose/></button>
        </div>
    </div>
    )}
</div>
    </div>
   
    
    
    
    
    
    

    </>
  )
}

export default Card
import React from 'react'
import "./card.css"
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai';
const Card = ({card,setCard}) => {


    const incqty = (val) => { 

        const exsit = card.find((x)=>
        x.id === val.id
        )
        setCard(card.map((item)=>
        item.id === val.id ? {...exsit,qty: exsit.qty +1} : item
        ))

     }

     const decqty = (val) => { 

        const azalan = card.find((x)=> x.id === val.id)

        setCard(card.map((item)=>
        item.id === val.id ? {...azalan, qty: item.qty - 1} : item
        ))



      }

      const removeProduct = (val) => { 

            const exsit = card.find((x)=> x.id === val.id)
            if(exsit.qty > 0)
            setCard(card.filter((item)=>
            item.id !== val.id 
            ))


       }
       const Totalprice = card.reduce((price, item) => price + item.qty * item.Price, 0)
      
          

     

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
    <div key={item.id} className="cart_item">
        <div className="img_box">
            <img src={item.Img} alt={item.Title} />
        </div>
        <div className="detail">
            <div className="info">
            <h4>{item.Cat}</h4>
            <h3>{item.Title}</h3>
            <p>Price : ${item.Price}</p>
            <div className="qty">
                <button className="incqty" onClick={()=> incqty(item)}> +  </button>
                <input type="text" value={item.qty}  />
                <button className="decqty" disabled={item.qty < 1} onClick={()=> decqty(item)}> -  </button>
        <h4>Sub Total : ${item.Price * item.qty}</h4>
             
            </div>
            <div className="close">
            <button onClick={()=> removeProduct(item)}><AiOutlineClose/></button>
            </div>
        </div>
        </div>
    </div>
    )}
</div>
{
    card.length > 0 &&
    <>
    <h2 className='totalprice'>total: $ {Totalprice}</h2>
            <button className='checkout'>
            
                Checkout
              
                </button>
    </>
    

}

    </div>
   
    
    
    
    
    
    

    </>
  )
}

export default Card
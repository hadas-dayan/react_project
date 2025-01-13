// import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
function Cart({cart, addToCart,delitFromCart}) {
  // const add=(products)=>{
  //   addToCart(products);
  //   products.quantity++;

  // }
  const handleAddToCart = (product) => {
    addToCart(product);
  };
  
  return (<>
    <br></br> <br></br>  <br></br>  <br></br>  <br></br>  <br></br> <br></br> <br></br>
      <h1>העגלה שלך</h1>
          {cart.map((products, index) => (      
            <div key={index} >    
            <button onClick={()=>handleAddToCart(products)}>+</button>
            <button onClick={()=>delitFromCart(products)}>-</button>
            <h1>כמות פריטים ממוצר זה: {products.quantity}</h1>
            <img src={"/imeges/"+products.img}  alt={products.name} />
            <p>{products.name}</p>
            <p >₪{products.price} </p>
            <Link to="/payment">
            <button >קנה עכשיו</button>
            </Link>
            </div>
          ))}
    </>);
}
export default Cart;
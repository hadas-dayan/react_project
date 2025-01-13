import { useParams,useNavigate } from "react-router-dom";


function ProductDetails({addToCart}) {
  const {img ,name ,details,price,quantity} = useParams();
  const product={
    img:img,
    name:name,
    details:details,
    price:price,
    quantity:quantity
  }
  const navigate = useNavigate();


  const handleAddToCart=()=>{
    addToCart(product);
    navigate('/cart');
  }
  return (
    <div className="product-details-container">

      <img src={"/imeges/"+img} alt={name} />

      <div className="product-details-content">

        <h1>{name}</h1>
        <p>{details}</p>

          <button onClick={handleAddToCart}>הוספה לסל</button>
      
      </div>
    </div>
  );
}

export default ProductDetails;

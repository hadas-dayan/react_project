import { useState } from "react";
import { Link } from "react-router-dom";
function Payment({ cart }) {
    const SumPrice = () => {
        return cart.reduce((total, item) => total + parseFloat(item.price||0), 0);
      };
    //  const [showPopup, setShowPopup] = useState(false); // הגדרת state

    //   const handleOrderConfirmation = () => {
    //     setShowPopup(true); // הצגת הפופ-אפ
    //     setTimeout(() => {
    //       setShowPopup(false); // הסתרת הפופ-אפ אחרי 3 שניות
    //     }, 3000);
    //   };
        
    
    return <>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>פרטי הזמנה</h1>
        <h1>סה"כ לתשום {SumPrice()}</h1>
        <Link to="/invited">
        <button>לאישור הזמנה</button>
        </Link>
        {cart.map((products, index) => (

            <div key={index} >
                <img src={"/imeges/" + products.img} />
                <p >₪{products.price} </p>
            </div>))}
            
    
    </>
}
export default Payment;



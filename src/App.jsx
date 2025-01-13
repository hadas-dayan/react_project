import './App.css';
import { useState } from "react";
import { Routing } from './components/Routing';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  //pruductInfo
  const [products, setProduct] = useState([
    {  
        id: 1,
        img: "git1.webp",
        name: "גיטרה חשמלית ",
        price: 2246,
        details: "Paul Stanley Cracked Mirror Signature Paul Reed Smith",
        quantity:0
    },
    {  
        id: 2,
        img: "git2.webp",
        name: "עוד גיטרה",
        price:4245,
        details: "Paul Stanley Cracked Mirror Signature Paul Reed Smith",
        quantity:0
    },
    {  
        id: 3,
        img: "git3.webp",
        name: "גיטרה ",
        price: 2400,
        details: "Paul Stanley Cracked Mirror Signature Paul Reed Smith",
        quantity:0
    },
    {  
        id: 4,
        img: "git4.webp",
        name: "גיטוש",
        price: 2246,
        details:"Paul Stanley Cracked Mirror Signature Paul Reed Smith",
        quantity:0
    }
  
]);
const [cart, setCart]=useState([]);

const addToCart=(newProduct)=>{
  setCart([...cart,newProduct]);
}


// const addToCart = (product) => {
//   alert("Adding to cart:", product); // בדוק אם הפונקציה מופעלת
//   const existingProduct = cart.find(item => item.id === product.id);

//   if (existingProduct) {
//     setCart(cart.map(item =>
//       item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//     ));
//   } else {
//     setCart([...cart, { ...product, quantity: 1 }]);
//   }
// };


const delitFromCart = (product) => {
  const existingProduct = cart.find(item => item.id === product.id);
  if (existingProduct && existingProduct.quantity > 1) {
    setCart(cart.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
    ));
  } else {
    setCart(cart.filter(item => item.id !== product.id));
  }
};



// ///פונקציה למחיקת מוצר לפי id
// const deleteProduct = (product) => {
//   // בודקים אם המוצר קיים בעגלה
//   const existingProduct = cart.find(item => item.id === product.id);
//   // אם המוצר קיים והכמות יותר מ-1, מורידים כמות ב-1
//   if (existingProduct && existingProduct.quantity > 1) {
//     setCart(cart.map(item =>
//       item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
//     ));
//   } else {
//     // אם כמות המוצר היא 1, מסירים אותו לחלוטין מהעגלה
//     setCart(cart.filter(item => item.id !== product.id));
//   }
// }
  return (<>
   
    <div className="app-container">
      <Header cart={cart} />
      <Routing products={products} cart={cart} addToCart={addToCart} delitFromCart={delitFromCart}/>
      <Footer />
    </div>
    </>);
}
export default App;

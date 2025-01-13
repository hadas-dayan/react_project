import {  Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import ProductInfo from './ProductInfo';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import Contect from './Contect';
// import Footer from './Footer';
// import Header from './Header';
import Payment from './Payment';
import Invited from './Invited';
import Login from './Login';
import Register from './Register';


export const Routing = ({products,cart,addToCart,delitFromCart}) => {
    return <>
        <Routes>
        
            {/* <Route path="/header" element={<Header />}/> */}
            <Route path="/home" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path='/productInfo' element={<ProductInfo products={products}/>} />
            <Route path="/productDetails/:img/:name/:details/:price/:quantity" element={<ProductDetails addToCart={addToCart} />} />
            <Route path='/cart' element={<Cart cart={cart}  addToCart={addToCart} delitFromCart={delitFromCart}/>} />
            <Route path='/contact' element={<Contect />} />
            {/* <Route path='/footer' element={<Footer/>} />   */}
            <Route path="/payment" element={<Payment cart={cart}/>} />
            <Route path="/invited" element={<Invited />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/" element={<Home/>} />
            
        </Routes>
    </>
    
}
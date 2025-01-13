import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ProductList from './components/ProductsList';
import Message from './components/Message';
import PayBox from './components/PayBox';
import OrderButtons from './components/OrderButtons';


function App() {


  const [products, setProducts] = useState([
    { id: 1, name: "קפה", price: 4, machineCell: 100, qty: 2 },
    { id: 2, name: "2קפה", price: 4, machineCell: 101, qty: 0 },
    { id: 3, name: "3קפה", price: 4, machineCell: 102, qty: 2 }

  ]);
  const [money, setMoney] = useState(20); //הכסף בארנק
  const [pay, setPay] = useState(0);  //הכסף שמשתמ הכניס למכונה
  const [message, setMessage] = useState("ברוכים הבאים");
  const addCoin = (coin) => {
    setMoney(money - coin); //כמה כסף יש למשתמש
    setPay(pay + coin);     //כמה מטבעות סה''כ הוכנסו למכונה
    setMessage(pay + " ש''ח");
  }
  const order = (cellId) => {
    debugger;
    const modifiedProducts = [...products];
    const index = products.findIndex(p => p.machineCell === cellId);
    const product = products[index];

    if (product.qty == 0) {
      setMessage("מצטערים המוצר אזל");
      return;
    }
    if (product.price > pay) {
      setMessage("הכסף לא מספיק");
      return;
    }
    setMessage("בתאבון! תודה שקנית אצלינו");
    modifiedProducts[index].qty--;
    if (product.price < pay)
      setMoney(pay - product.price);
  }

  return <>


    <div className="App" style={{ display: "flex", height: "100vh", padding: "5rem" }}>

      <div style={{ width: "20vw" }}>
        <Message text={message} textColor={"blue"} />
        <PayBox onCoinClicked={addCoin} />
        <OrderButtons onOrder={order} />
      </div>
      <div style={{ flex: 1, width: "60vw" }}>
        <ProductList parr={products} />
      </div>
      <div>
        <p>ארנק</p>
        <p>{money} ש''ח</p>
      </div>
    </div>
  </>

}

export default App;

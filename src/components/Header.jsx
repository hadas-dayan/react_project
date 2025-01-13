import { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyContext from "../context/context"

function Header({cart}) { 
  const currentUser=useContext(MyContext).currentUser;
  const logOut=useContext(MyContext).logOut;
  return (
    <>
  
      <nav className="nav-links">
      <span>{currentUser==null? "התחבר לאתר":currentUser.name+"שלום ל"}</span>
      {!currentUser?<>
            <Link to="/register">הרשמה</Link>
            <Link to="/login">התחברות</Link>
      </>:<>
        <Link to="">🧑‍🦳</Link>
        <button onClick={()=>logOut()}>התנתקות</button>
      </>}
    
      <Link to="/cart">🛒({cart.length})</Link>
      <Link to='/contact'>צור קשר</Link>
      <Link to="/productInfo">גיטרות</Link>
      <Link to="/about">אודות</Link>
      <Link to="/home">דף הבית</Link>

   
     
      </nav>
      
    </>
  );
}

export default Header;
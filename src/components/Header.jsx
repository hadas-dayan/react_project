import { Link } from 'react-router-dom';

function Header({cart}) { 
  return (
    <>
  
      <nav className="nav-links">
      <Link to="">🧑‍🦳</Link>
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
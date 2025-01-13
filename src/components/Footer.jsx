import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer-container">
      <Link to="/home">דף הבית</Link>
      <a href="#">תקנון האתר</a>
      <Link to="/contact">צור קשר</Link>

    </footer>
  );
}
export default Footer;
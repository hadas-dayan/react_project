import { Link } from "react-router-dom";

function Card({ product }) {
    return (
        <div className="card">
            <img src={"/imeges/"+product.img} alt={product.name} />
            <h1>{product.name} </h1>
            <h1 className="price">{product.price}</h1>
            <nav>
                <Link to={"/productDetails/"+product.img+"/"+product.name+"/"+product.details+"/"+product.price+"/"+product.quantity}>
                    <button>לפרטים נוספים</button>
                </Link>
            </nav>
        </div>
    );
}

export default Card;

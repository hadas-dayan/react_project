
import Card from "./Card";

function ProductInfo({products}) {
 
    return (
        <div className="product-info">
            {products.map(p => <Card key={p.id} product={p} />)}
        </div>
    );
}

export default ProductInfo;

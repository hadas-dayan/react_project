function Product({name, price, code}) {

    return <>
        <div style={{border:"2px blue solid"}}>
            <p> {name}</p>
            <p>{price}</p>
            <p>{code}</p>
        </div>
    </>
}

export default Product;
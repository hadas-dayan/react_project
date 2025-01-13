import { useState } from "react";
import Product from "./Product";

function ProductList({parr}) {
 

    return <>
        <div>
           {parr.map(p=> <Product name={p.name} price={p.price} code={p.machineCell} /> )}
           {/* {parr.map(p=>
           <div>
                <p>{p.name}</p>
                <p>{p.price}</p>
                <p>{p.machineCell}</p>

           </div>)} */}
        </div>
    </>
}

export default ProductList;
import { useState } from "react";

function OrderButtons({ onOrder }) {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [cellId, setCellId] = useState("");


    const makeOrder = () => {
        onOrder(Number(cellId));
    }

    return <>
        <div>
            {arr.map(num => <button onClick={() => { setCellId(cellId+num) }}>{num}</button>)}
        </div>
        <button onClick={() => { makeOrder() }}>הזמן</button>
    </>
}

export default OrderButtons;
function PayBox({ onCoinClicked }) {
    const arr = [1, 2, 5, 10];


    return <>
        <div>
            {arr.map(num => <button class="coin" onClick={() => { onCoinClicked(num) }}>{num}</button>)}
        </div>
    </>
}

export default PayBox;
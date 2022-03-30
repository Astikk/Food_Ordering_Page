import './order.css';

function Order()
{
    // Order List
    return(
        <div className="order_list">
            <p className='my_edt'>Edit</p>

            <h1 className='my_o'>My Order</h1>

            <hr id='line'/>

            <div id='order_list'>
                <img src='' alt='Img '></img>

                <p> Food Name</p>

                <p> Increment</p>

                <p>$ Price </p>

            </div>

            <h1 id='drag'>Drag&Drop</h1>

            <div className='price'>
                <p className='dolr'>$ </p>
                <p className='totl'>Total</p>
            </div>

            <input id='butn' type="button" value={"Checkout"}/>

        </div>
    );
}

export default Order;
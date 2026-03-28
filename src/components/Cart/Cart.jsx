import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }
    const tax = total / 10;
    let shipping = 0;
    if(total > 100){
        shipping =0;
    }
    else if (total > 35){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 9.99;
    };

    return (
        <div className="order-summary">
                <h3>Order Summary</h3>
                <p><small>Items Ordered: {cart.length}</small></p>
                <p><small>Product Price: {(total).toFixed(2)}</small></p>
                <p><small>Shipping Cost: {(shipping).toFixed(2)}</small></p>
                <p><small>Tax: {(tax).toFixed(2)}</small></p>
                <p>Total Price: {(total + shipping + tax).toFixed(2)}</p>
        </div>
    );
};

export default Cart;
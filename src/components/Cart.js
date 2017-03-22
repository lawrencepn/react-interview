/**
 * Created by lawrencenyakiso on 2017/03/22.
 */
import React from 'react';

const Cart = (props) => {

    const listCartItems = props.cartItems.map((item, index) =>
        <li key={item.id}>
            <span id="itemDetails">{item.brand} - {item.name} : R{item.price}</span>
            <br/>
            <a onClick={() => props.onCartItemSelect(index)}>Remove from cart</a>
        </li>
    );
    return (
        <ul>
            {listCartItems}
        </ul>
    )
};

Cart.propTypes = {
    cartItems: React.PropTypes.array.isRequired,
    onCartItemSelect: React.PropTypes.func
};

export default Cart;
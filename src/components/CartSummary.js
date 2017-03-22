import React from 'react';

const CartSummary = (props) => {
    const shoesPrices = [];
    props.cart.map((shoe) => (
        shoesPrices.push(shoe.price)
    ));

    let totalcost = shoesPrices.reduce((prev, curr) => prev + curr, null);
    if(totalcost == null){
        totalcost = 0;
    }

  return (
    <div className="CartSummary">
      CartSummary:
       <div>
           <span id="ItemCount">
               {props.cart.length}
            </span>
           <br/>
            <span id="TotalCost">
                {totalcost.toFixed(2)}
            </span>
       </div>
    </div>
  )
};

CartSummary.propTypes = {
    cart: React.PropTypes.array.isRequired,
};

export default CartSummary;
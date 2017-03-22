import React from 'react';


const Shoe = (props) => {
    return (
        <div>
            <span>{props.name}</span> <span>{props.brand}</span> <span>{props.price.toFixed(2)}</span>
            <br/>
            <a onClick={() => props.onShoeSelect(props)}>Add To Cart</a>
        </div>
    )
};


Shoe.propTypes = {
    id: React.PropTypes.string,
  brand: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  price: React.PropTypes.number.isRequired,
  onShoeSelect: React.PropTypes.func,
};

export default Shoe;
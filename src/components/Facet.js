import React from 'react';
import {countByKey} from '../utils';

const Facet = (props) => {
    const listItems = countByKey(props.items, 'brand').map((item) =>
        <li key={item.brand}  onClick={() => props.onFacetSelect(item)}>{item.brand} ({item.count})</li>
    );
    return (
          <ul>
              {listItems}
          </ul>
    )
};

Facet.propTypes = {
    items: React.PropTypes.array.isRequired,
    onFacetSelect: React.PropTypes.func,
};

export default Facet;
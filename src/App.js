import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Api from './api';
import ShoeList from './components/ShoeList';
import CartSummary from './components/CartSummary';
import Facet from './components/Facet';
import Cart from './components/Cart';

class App extends Component {

  /**
   * TIP:
   *  - this.state = {...}
   *  - this.someFunction = this.someFunction.bind(this)
   * */
  constructor(props) {
    super(props);
    this.state = {
        shoes : [],
        cart : [],
        facetSelected : null
    };
    //this.handleShoeSelect = this.handleShoeSelect.bind(this);
    ////this.handleFacetSelect = this.handleFacetSelect.bind(this);
    //this.handleCartItemSelect = this.handleCartItemSelect(this);
  }

  /**
   * TIP:
   *  - Api.getShoes() returns a promise
   *  - this.setState() might be useful
   * */

  componentDidMount() {
      new Promise((resolve, reject) => {
          resolve(Api.getShoes())
      }).then((shoes) => {
            this.setState({
                shoes : shoes
            })
      })
  }

  handleShoeSelect = (shoe) => {
      this.setState( (state) => {
          state.cart = state.cart.concat([shoe]);
          return state;
      });
      //this.state.cart.push(shoe)
  }

  handleFacetSelect = (item) => {
      //update state.facetSelected
        this.setState((state) => {
            state.facetSelected = item.brand
        })
      //update state.shoes
        //return only items that have the selected facet/
        const matchesFacet = (facet) => {
            return (facet.brand === item.brand)
        }

        let filtered = this.state.shoes.filter(matchesFacet)
        this.setState((state) => {
          state.shoes = filtered
        })


  }

  handleFacetToggle = () => {
      this.setState((state) => {
          state.facetSelected = null
      })
  }

  handleCartItemSelect = (itemIndex) => {
        this.setState( (state) => {
            state.cart = state.cart.slice(0,itemIndex);
            return state;
        });
    }

  render() {
    return (
      <div>

        <NavBar title="Shoe Store"/>

        <div className="row">

          <div className="col s3">
            <Facet items={this.state.shoes} onFacetSelect={this.handleFacetSelect}/>
          </div>

          <div className="col s6">
            <ShoeList shoes={this.state.shoes} onShoeSelect={this.handleShoeSelect}/>
          </div>

          <div className="col s3">
            <CartSummary cart={this.state.cart} />
          </div>

        </div>

          <div className="row">
              <div className="col 6">
                  <Cart cartItems={this.state.cart} onCartItemSelect={this.handleCartItemSelect}/>
              </div>
          </div>

      </div>

    );
  }
}

export default App;

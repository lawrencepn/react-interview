/**
 * Created by lawrencenyakiso on 2017/03/22.
 * * As a customer, I would like to be able to view the items in my cart
 * * As a customer, I would like to be able to remove items from my cart
 */

import React from 'react';
import {shallow} from 'enzyme';
import App from '../src/App';
import Cart from '../src/components/Cart';

const mockCart = [
    { id: 'a', brand: 'Nike', name: 'Air Max 90', price: 2999.99 },
    { id: 'b', brand: 'Nike', name: 'Cortez', price: 2129.99 },
    { id: 'c', brand: 'Nike', name: 'Roshe', price: 333.99 }
];

describe('App', () => {

    it('should have an instance method called `handleCartItemSelect`', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.instance().handleCartItemSelect).toBeInstanceOf(Function);
    });

    it('should pass `state.cart` as a prop to <Cart />', () => {
        const wrapper = shallow(<App/>);
        const cartProps = wrapper.find(Cart).props();

        expect(Object.keys(cartProps)).toContain('cartItems');
        expect(cartProps.cart).toEqual(wrapper.state().cartItems);
    });

    it('should pass a function called `onCartItemSelect` as a prop to <Cart />', () => {
        const wrapper = shallow(<App/>);
        const cartProps = wrapper.find(Cart).props();
        expect(Object.keys(cartProps)).toContain('onCartItemSelect');
        expect(cartProps.onCartItemSelect).toBeInstanceOf(Function);
    });

    it('`handleCartItemSelect()` should remove the item from `state.cart`', () => {
        const wrapper = shallow(<App/>);
        wrapper.state().cart = mockCart;
        expect(wrapper.state().cart.length).toEqual(3);
        wrapper.instance().handleCartItemSelect(1);
        expect(wrapper.state().cart.length).toEqual(2);
    });
});

describe('Cart', () => {

    it('it should render <li/> for every shoe in the cart', () => {
        const wrapper = shallow(<Cart cartItems={mockCart}/>);
        expect(wrapper.find('li').length).toEqual(3);
    });

    it('the <li/> for every shoe should contain brand, name and price in span#itemDetails', () => {
        const wrapper = shallow(<Cart cartItems={mockCart}/>);
        const firstLI = wrapper.find('li').first();
        expect(firstLI.find('#itemDetails').text()).toEqual('Nike - Air Max 90 : R2999.99');
    });

    it('the <li/> should render an <a/> element to remove the shoe from the cart', () => {
        const wrapper = shallow(<Cart cartItems={mockCart} />);
        expect(wrapper.find('a').length).toEqual(3);
    });

    it('when clicking on the <a/> element, the shoe should be removed from the cart', () => {const selectSpy = jest.fn();
        const AppWrapper = shallow(<App/>);
        AppWrapper.state().cart = mockCart;
        const wrapper = shallow(<Cart cartItems={mockCart} onCartItemSelect={selectSpy} />);
        const firstLI = wrapper.find('li').first();
        const button = firstLI.find('a');
        expect(selectSpy.mock.calls.length).toEqual(0);

        button.simulate('click');
        expect(selectSpy.mock.calls.length).toEqual(1);

    });
});
import React, { Component } from 'react';
import Nav from '../Nav';
import Header from '../Header';
import Wrapper from '../Wrapper';
import ItemCard from '../ItemCard';
import CartItem from '../CartItem';
import data from '../../product-payload.json';
import './Shop.css';

class Shop extends Component {
    state = {
        data: data.products,
        cart: [],
        showCart: false,
        cartTotal: 0,
        itemCount: 0
    }

    showShop = () => {
        this.setState({
            showCart: false
        })
    }

    showCart = () => {
        this.setState({
            showCart: !this.state.showCart
        })
    }

    updateCartCount = items => {
        this.setState({
            itemCount: items.length
        });
    }

    updateCartTotal = items => {
        let priceArr = [];
        items.map(item => priceArr.push(item.price));
        let total = priceArr.reduce((a, b) => a + b, 0);
        const cartTotal = total / 100;
        this.setState({cartTotal});
    }

    removeFromCart = id => {
        // remove item from cart
        const cart = this.state.cart.filter(friend => friend.filename !== id);
        this.setState({cart});

        // update products data
        const newData = this.state.data.map(item => {
            const newItem = { ...item };

            // check if item already in cart
            if (newItem.filename === id) {
                if (newItem.inCart) {
                    newItem.inCart = false;
                }
            }
            return newItem;
        });
        this.setState({data: newData});

        // update current cart
        this.updateCartCount(cart);
        this.updateCartTotal(cart);
    }

    handleItemClick = id => {
        const newData = this.state.data.map(item => {
            const newItem = { ...item };

            // check if item already in cart
            if (newItem.filename === id) {
                if (!newItem.inCart) {
                    newItem.inCart = true;
                    // push item into cart
                    this.state.cart.push(newItem);
                }
            }
            return newItem;
        });
        this.setState({data: newData});

         // update current cart
        this.updateCartCount(this.state.cart);
        this.updateCartTotal(this.state.cart);
    }

    render() {
        return (
            <div>
                <Nav 
                    itemCount={this.state.itemCount}
                    showShop={this.showShop}
                    showCart={this.showCart}
                />
                
                <div className={this.state.showCart ? "cart-page show" : "cart-page"}>
                    {this.state.showCart
                        ? (
                            <div className="container col-6 col-lg-4 text-center cart-items">
                                <h4>Your Cart</h4>
                                {this.state.cart.length !== 0
                                    ? (
                                        <div>
                                            {this.state.cart.map(item => (
                                                <CartItem
                                                    key={item.filename}
                                                    id={item.filename}
                                                    image={`/assets/images/${item.filename}`}
                                                    name={item.name}
                                                    price={item.price/100}
                                                    handleClick={this.removeFromCart}
                                                />
                                            ))}
                                        </div>
                                    ) : (
                                        <p>Nothing in your cart, start shopping.</p>
                                    )
                                }
                                <hr/>
                                <div className="h4 row">
                                    <div className="col-6 text-left">Total:</div>
                                    <div className="col-6 text-right">${this.state.cartTotal}</div>
                                </div>
                                <button className="btn btn-secondary" onClick={this.showShop}>Back</button>
                            </div>
                        ) : ('')
                    }
                </div>
                <div className="shop-page">
                    <Header>
                        Shop our featured collection
                    </Header>
                    <Wrapper>
                        {this.state.data.map(item => (
                            <ItemCard
                                key={item.filename}
                                id={item.filename}
                                image={`/assets/images/${item.filename}`}
                                name={item.name}
                                price={item.price/100}
                                handleClick={this.handleItemClick}
                            />
                        ))}
                    </Wrapper>
                </div>
            </div>
        );
    }
}

export default Shop;
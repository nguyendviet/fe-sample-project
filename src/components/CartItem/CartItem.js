import React from 'react';
import './CartItem.css';

const CartItem = props => (
    <div>
        <div className="row">
            <div className="col-6 image-box">
                <img alt={props.name} src={props.image}/>
            </div>
            <div className="col-6">
                <p className="text-right">{props.name} <i className="fas fa-times-circle remove-item" onClick={() => props.handleClick(props.id)}></i></p>
                <p className="text-right">${props.price}</p>
            </div>
        </div>
    </div>
);

export default CartItem;
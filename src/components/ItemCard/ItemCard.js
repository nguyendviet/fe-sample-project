import React from 'react';
import './ItemCard.css';

const ItemCard = props => (
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
        <div className="content text-center">
            <ul>
                <li>
                    {props.name}
                </li>
                <li>
                    ${props.price}
                </li>
                <li>
                    <button className="btn btn-secondary" onClick={() => props.handleClick(props.id)}>Add to cart</button>
                </li>
            </ul>
        </div>
    </div>
);

export default ItemCard;
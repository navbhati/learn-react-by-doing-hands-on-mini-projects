import React from 'react'

function Product(props) {
    return (
        <ul>
            <li><h3>{props.product.name}</h3></li>
            <li>{props.product.price}</li>
            <li>{props.product.description}</li>
        </ul>
    )
}

export default Product
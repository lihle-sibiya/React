import React, { Component } from 'react';
class Products extends Component {
    render() {
        //const products = ["Learning React", "Pro React", "Beginning React"];
        const products = [];
        const listProducts = products.map((product) =>
            <li key={product.toString()}>{product}</li>
        );
        return (
            // <div>
            //     <ul>{listProducts}</ul>
            // </div>


            //Inline If with && Operator
            // <div>
            //     {listProducts.length > 0 &&
            //         <ul>{listProducts}</ul>
            //     }
            //     {listProducts.length == 0 &&
            //         <ul>No Products to display</ul>
            //     }
            // </div>


            //Inline If-Else with Conditional Operator
            <div>
                {listProducts.length > 0 ? (
                    <ul>{listProducts}</ul>
                ) : (
                    <ul>No Products to display</ul>
                )}
            </div>
        );
    }
}
export default Products;
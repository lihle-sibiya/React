import { connect } from "react-redux";
import Cart from "./Cart";


function mapStateToProps(state) {
  return {
    totalCost: state.totalCost,
    productCart: state.productCart
  }
}

function mapDispatchToProps(dispatch) {//can be called to dispatch action to the store
  return {
    onAddProduct: (productName, productPrice) => dispatch({//dispatches an action
      type: "addProduct", //action type addProduct: handled by the reducer
      productData: { //payload
        productName: productName,
        productPrice: productPrice
      }
    }),
    onDeleteProduct: (productData) => dispatch({
      type: "deleteProduct",
      productData: productData
    })
  }
}

//connect both functions to our Cart component so that it has access to
// totalCost, onAddProduct and onDeleteProduct as props.
var connectedComponent = connect( //done using the connect method 
  mapStateToProps,
  mapDispatchToProps
)(Cart);

export default connectedComponent;
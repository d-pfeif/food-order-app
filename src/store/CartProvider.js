import CartContext from "./cart-context"

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {}
  const removeItemToCartHandler = (item) => {}
  const cartCtx = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler
  }
  
  return (
    <CartContext.Provider value={{...cartCtx}}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
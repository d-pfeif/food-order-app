import { useContext, useEffect, useState } from "react"
import classes from "./HeaderCartButton.module.css"
import CartIcon from "../Cart/CartIcon"
import CartContext from "../../store/cart-context"

const HeaderCartButton = (props) => {
  const [buttonActive, setButtonActive] = useState(false)
  const cartCtx = useContext(CartContext)
  const {items} = cartCtx;


  const numberOfCartItems = items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${buttonActive ? classes.bump : ''}`

  useEffect(() => {
    if (items.length === 0) {
      return
    }
    setButtonActive(true)

    const timer = setTimeout(() => {
      setButtonActive(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>
        {numberOfCartItems}
      </span>
    </button>
  )
}

export default HeaderCartButton
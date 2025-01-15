import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    return(
        <div>
            <img className="cartIcon" src="https://cdn-icons-png.freepik.com/256/12586/12586359.png?ga=GA1.1.1494070364.1736932574&semt=ais_hybrid" alt="Cart" />
            <h3>TOTAL: $ {totalPrice}</h3>
            {cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)}
            
        </div>
    )
}

export default Cart;
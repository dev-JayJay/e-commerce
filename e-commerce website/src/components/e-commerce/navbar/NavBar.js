import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import './NavBar.css'
import { useSelector } from 'react-redux'
function NavBar() {
    const cart = useSelector(state => state.cartReducer.cart);
    let count = 0;
    cart.forEach((item) => (count += item.quantity));
    return (
        <nav>
            <h2 className="banner">
                My Myntra
            </h2>
            <div className="right-layout">
                <div className="cart-layout">
                    <AiOutlineShoppingCart />
                    <h3>{count}</h3>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;
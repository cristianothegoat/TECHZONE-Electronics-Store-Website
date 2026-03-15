import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../utils/context";
import "./Cart.scss";

const Cart = ({ setShowCart }) => {
    const navigate = useNavigate();

    const goToCheckout = () => {
        setShowCart(false); // Close the cart before navigating to checkout
        navigate('/checkout'); // This will navigate to the checkout page
    };

    const { cartItems, cartSubTotal } = useContext(Context);

    return (
        <div className="cart-panel">
            <div className="opac-layer"></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Cart</span>
                    <span className="close-btn" onClick={() => setShowCart(false)}>
                        <MdClose />
                        <span className="text">Close</span>
                    </span>
                </div>

                {!cartItems?.length && (
                    <div className="empty-cart">
                        <BsCartX />
                        <span>No Products in the Cart</span>
                        <button className="return-cta">Return to Shop</button>
                    </div>
                )}

                {!!cartItems?.length && (
                    <>
                        <CartItem />
                        <div className="cart-footer">
                            <div className="subtotal">
                                <span className="text">Subtotal</span>
                                <span className="text total">&#8377;{cartSubTotal}</span>
                            </div>
                            <div className="button">
                                <button className="checkout-cta" onClick={goToCheckout}>
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;

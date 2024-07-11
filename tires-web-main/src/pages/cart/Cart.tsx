
import React, { useState, useEffect } from 'react';
import './Cart.css';
import { ITire } from '../../interfaces/ITire';

interface CartItem extends ITire {
    price: number,
    quantity: number,
    isAvailable: boolean
}

const Cart: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [discount, ] = useState<number>(0.05);
    const imageUrl = "https://firebasestorage.googleapis.com/v0/b/tires-dm.appspot.com/o/Tires%2Fmichelin-primacy-4-23385-f-f-l130x175-sk6.webp?alt=media&token=e34a0787-2e67-40bb-a138-74dbd271c365";
    const tiresToPurchase: CartItem[] = [
        {
            id: 1,
            typeOfTire: "",
            icVc: "some index",
            diameter: 16,
            width: 205,
            profile: 55,
            manufacturer: "Continental",
            season: "summer",
            url: imageUrl,
            urls: [imageUrl, imageUrl],
            inf: "",
            price: 400,
            quantity: 5,
            isAvailable: true
        },
        {
            id: 2,
            typeOfTire: "",
            icVc: "some index",
            diameter: 16,
            width: 205,
            profile: 55,
            manufacturer: "Michelin",
            season: "summer",
            url: imageUrl,
            urls: [imageUrl, imageUrl],
            inf: "",
            price: 500,
            quantity: 10,
            isAvailable: true
        },
        {
            id: 2,
            typeOfTire: "",
            icVc: "some index",
            diameter: 16,
            width: 205,
            profile: 55,
            manufacturer: "Pirelli",
            season: "summer",
            url: imageUrl,
            urls: [imageUrl, imageUrl],
            inf: "",
            price: 450,
            quantity: 10,
            isAvailable: true
        },

    ]

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                // const response = await fetch('/api/cart');
                const response = tiresToPurchase;
                // const data: CartItem[] = await response.json();
                const data: CartItem[] = response;

                setCartItems(data);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        fetchCartItems();
    }, []);

    const handleQuantityChange = (id: number, delta: number) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
            )
        );
    };

    const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const discountAmount = totalPrice * discount;
    const finalPrice = totalPrice - discountAmount;

    return (
        <div>
            <div className='cart-top'>
                <h2>Your Order</h2>
            </div>
            <div className="cart-container">
                <div className="cart-left">
                    <div className="cart-items">
                        {cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.url} alt={item.manufacturer} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <div>
                                        <span>{item.manufacturer} {item.typeOfTire}</span>
                                    </div>
                                    <div>
                                        <span>{item.width}/{item.profile}R{item.diameter}</span>
                                    </div>
                                    <div className="cart-item-quantity">
                                        <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                                    </div>
                                    <div>
                                        <span className="cart-item-price">{item.price.toFixed(2)} €</span>
                                    </div>
                                    <div>
                                        <span>{item.isAvailable ? 'Available' : 'Out of Stock'}</span>
                                        <span>Guaranty: 1 year</span>
                                        <span className="cart-item-discount-price">{(item.price * 0.95).toFixed(2)} €</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="cart-right">
                    <div className="cart-summary">
                        <div>
                            <span>Total Tires: {totalQuantity}</span>
                            <span>Total: {totalPrice.toFixed(2)} €</span>
                        </div>
                        <div>
                            <span>Discount: 5%</span>
                            <span>Discount Amount: {discountAmount.toFixed(2)} €</span>
                        </div>
                        <div>
                            <span>Total:</span>
                            <span>{finalPrice.toFixed(2)} €</span>
                        </div>
                        <div className="order-button-container">
                            <button className="order-button">Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;

import "./Checkout.scss";
import React, { useEffect, useState } from 'react';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";  // To handle redirection
import { Context } from "../../utils/context";

const Checkout = () => {
  const [subtotal, setSubtotal] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    cartDetails: "", // Field for cart details (will store selected products)
  });
  const [success, setSuccess] = useState(false); // State to track success
  const [errorMessage, setErrorMessage] = useState(""); // State to track error message
  const { cartItems, cartSubTotal } = useContext(Context);
  const navigate = useNavigate(); // Hook for redirection

  // Recalculate the subtotal whenever cartItems changes
  useEffect(() => {
    if (!cartItems || cartItems.length === 0) return; // Safety check for empty cart
    let myTotal = 0;
    cartItems.forEach((item) => {
      myTotal += item.price * item.quantity; // Calculate subtotal (price * quantity)
    });
    setSubtotal(myTotal);
  }, [cartItems]); // Recalculate when cartItems changes

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Validate the form
  const validateForm = () => {
    if (!form.name || !form.email || !form.address || !form.phone) {
      setErrorMessage("Please fill in all required fields.");
      return false;
    }
    setErrorMessage(""); // Clear error message if all fields are filled
    return true;
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return; // Stop form submission if validation fails
    }

    const formData = new FormData(event.target);

    formData.append("access_key", "e2f5db7e-44d2-4803-b44f-49edf94e9715");

    // Collect cart items and convert them to a string for email display
    const cartDetails = cartItems.map((item) => {
      return `Product : ${item.title}, Price: ₹${item.price}, Quantity: ${item.quantity}`;
    }).join("\n");

    // Add cart details to form data
    formData.append("cartDetails", cartDetails);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    // Submit form data to API
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setSuccess(true); // Set success state to true
      setTimeout(() => {
        navigate('/'); // Redirect to home page after 3 seconds
      }, 3000); // Wait for the success message to be displayed before redirect
    } else {
      console.log("Error", res);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <section className="text-black body-font relative">
        <div className="container px-5 py-24 mx-auto min-h-screen">
          <div className="flex flex-col w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">Checkout</h1>
            <div className="cart">
              {cartItems.length ? `Your cart details are as follows:` : `Your cart is empty!`}
            </div>

            {/* Dynamically display cart items in input fields */}
            <ol className="list-decimal px-8">
              {cartItems.length > 0 ? cartItems.map((item, index) => (
                <li key={item.id}>
                  <label>Name: {item.title}</label>
                  <input
                    type="text"
                    name={`Product ${index + 1} Name`} // Dynamic name for each item
                    value={item.title}
                    readOnly
                  />
                  <label>Price: ₹{item.price}</label>
                  <input
                    type="text"
                    name={`Product ${index + 1} Price`} // Dynamic name for price
                    value={item.price}
                    readOnly
                  />
                  <label>Quantity:</label>
                  <input
                    type="number"
                    name={`Product ${index + 1} Quantity`} // Dynamic name for quantity
                    value={item.quantity}
                    readOnly
                  />
                </li>
              )) : <li>Your cart is empty.</li>}
            </ol>

            {/* Subtotal input field */}
            <div className="font-bold">
              <label>Subtotal:</label>
              <input
                type="text"
                name="subtotal"
                value={`₹${cartSubTotal}`}
                readOnly
              />
            </div>
          </div>


          {/* Form fields for user details */}
          <div className="form-fields">
            <div className="flex flex-wrap -m-2">
              {/* Name Input */}
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Phone Input */}
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Address Input */}
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
                  <textarea
                    id="address"
                    name="address"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    value={form.address}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="p-2 w-full">
                <button
                  className="flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Error Message */}
      {errorMessage && (
        <div className="error-message">
          <p>{errorMessage}</p>
        </div>
      )}

      {/* Success Message Popup */}
      {success && (
        <div className="success-popup">
          <div className="popup-content">
            <h2>Success! Your order has been placed.</h2>
          </div>
        </div>
      )}
    </form>
  );
};

export default Checkout;

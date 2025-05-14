import { useEffect, useState } from "react";
import CardAddtocart from "./CardAddtocart";
import { Link } from "react-router-dom";

// Dummy data to simulate items in localStorage
const dummyProduct = {
  _id: "1",
  name: "Classic Wooden Chair",
  shortDescription: "Ergonomic and stylish wooden chair",
  price: 49.99,
  image: "https://via.placeholder.com/150",
  availableAmount: 10,
  quantity: 1
};

const AddToCart = () => {
  // Load cart from localStorage or fallback to dummy data
  const [cartItems, setCartItems] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("addtocart"));
    return stored && stored.length ? stored : [dummyProduct];
  });

  useEffect(() => {
    localStorage.setItem("addtocart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleDelete = (id) => {
    setCartItems((prev) => prev.filter((item) => item._id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => {
    const quantity = Number(item.quantity) || 1;
    const price = typeof item.price === "number" ? item.price : Number(item.price) || 0;
    return sum + price * quantity;
  }, 0);

  const total = subtotal;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <span className="text-[#167389]">Cart</span>
          <span className="mx-2">{'>'}</span>
          <span>Checkout</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-6">Your Cart ({cartItems.length})</h2>
              <div className="divide-y divide-gray-200">
                {cartItems.length === 0 ? (
                  <p className="text-gray-500">Your cart is empty.</p>
                ) : (
                  cartItems.map((item) => (
                    <CardAddtocart
                      item={item}
                      quantity={item.quantity || 1}
                      key={item._id}
                      onQuantityChange={handleQuantityChange}
                      onDelete={() => handleDelete(item._id)}
                    />
                  ))
                )}
              </div>

              <div className="mt-6 flex justify-end">
                <Link to="/" className="text-[#167389] hover:text-[#135a6e] flex items-center">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Sub Total</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">Free</span>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-semibold">Total</span>
                    <span className="font-bold text-lg">${total.toFixed(2)}</span>
                  </div>
                </div>

                <button className="w-full bg-[#167389] hover:bg-[#135a6e] text-white py-3 px-4 rounded-md font-medium mt-4">
                  Proceed to Checkout
                </button>
              </div>

           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;

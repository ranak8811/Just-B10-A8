/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { getAllCartItems, removeCartItemFromLS } from "../utils/cart_script";
import { CartContext } from "../routes/New1";

const Cart = ({ gadgets }) => {
  const [, setCart] = useContext(CartContext);

  // State to hold all added carts
  const [allAddedCarts, setAllAddedCarts] = useState([]);

  // Fetch and set cart items from localStorage when the component mounts
  useEffect(() => {
    setAllAddedCarts(getAllCartItems());
  }, []);

  // Handle the "Purchase" button click
  const handlePurchase = () => {
    // Clear the carts data from localStorage
    localStorage.removeItem("carts");

    // Set the state to an empty array to reflect an empty cart
    setAllAddedCarts([]);
    setCart(0);
  };

  console.log(allAddedCarts);

  //   console.log(gadgets);
  const desiredGadgets = gadgets.filter((gadget) =>
    allAddedCarts.includes(gadget.product_id)
  );

  //   console.log(desiredGadgets);

  //   const handleRemove = () => {

  //   }

  return (
    <section>
      <div className="flex justify-between items-center">
        <h4 className="font-bold">Cart</h4>
        <div className="flex space-x-4 items-center">
          <h6 className="font-bold">Total Cost: 0</h6>
          <button className="text-[#9538E2] py-1 px-3 rounded-full border border-purple-600">
            Sort by Price
            <i className="fa-solid fa-arrow-down-wide-short ml-2"></i>
          </button>
          <button
            onClick={handlePurchase}
            className="bg-[#9538E2] text-white py-1 px-3 rounded-full "
          >
            Purchase
          </button>
        </div>
      </div>

      <div className="mt-6">
        {desiredGadgets.map((item, idx) => (
          <div key={idx} className="flex gap-10 border rounded-xl p-10 m-3">
            <div>
              <img
                className="w-[200px] object-cover rounded-xl"
                src={item.product_image}
                alt=""
              />
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col justify-center items-start space-y-6">
                <h4 className="text-2xl font-bold">{item.product_title}</h4>
                <p className="font-thin">{item.description}</p>
                <p className="font-bold">Price: ${item.price}</p>
              </div>

              <button
                onClick={() => removeCartItemFromLS(item.product_id)}
                className="flex justify-end items-end"
              >
                <i className="fa-regular fa-circle-xmark text-3xl text-red-600"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cart;

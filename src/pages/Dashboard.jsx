import { useState } from "react";
import Cart from "../components/Cart";
import Heading from "../components/Heading";
import Wishlist from "../components/Wishlist";
import { useLoaderData } from "react-router-dom";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("Cart");
  const allGadgets = useLoaderData();
  // console.log(allGadgets);

  return (
    <div>
      <div className="bg-[#9538E2] text-white py-10">
        <div className="w-7/12 mx-auto">
          <Heading
            title={"Dashboard"}
            subtitle={
              "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
            }
          />
        </div>

        <div className="text-center space-x-4 mb-8">
          <button
            className={`btn rounded-full px-10 ${
              activeComponent === "Cart" ? "bg-white text-[#9538E2]" : ""
            }`}
            onClick={() => setActiveComponent("Cart")}
          >
            Cart
          </button>
          <button
            className={`btn rounded-full px-10 ${
              activeComponent === "Wishlist" ? "bg-white text-[#9538E2]" : ""
            }`}
            onClick={() => setActiveComponent("Wishlist")}
          >
            Wishlist
          </button>
        </div>
      </div>

      <div className="mt-10">
        {activeComponent === "Cart" ? (
          <Cart gadgets={allGadgets} />
        ) : (
          <Wishlist gadgets={allGadgets} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;

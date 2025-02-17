import { useLoaderData, useParams } from "react-router-dom";
import Heading from "../components/Heading";
import { useContext, useEffect, useState } from "react";
import { addToCart } from "../utils/cart_script";
import { CartContext } from "../routes/New1";

const Details = () => {
  const [cart, setCart] = useContext(CartContext);
  const allGadgets = useLoaderData();
  const { id } = useParams();
  const [gadget, setGadget] = useState({});

  useEffect(() => {
    const singleGadget = allGadgets.find(
      (gadget) => gadget.product_id === parseInt(id)
    );
    setGadget(singleGadget || {});
  }, [allGadgets, id]);

  const {
    product_id,
    product_title,
    product_image,
    price,
    description,
    specification = [],
    availability,
    rating = 0,
  } = gadget;

  const renderStars = () => {
    const roundedRating = Math.round(rating);
    const maxStars = 5;

    return (
      <div className="rating flex gap-1">
        {[...Array(roundedRating)].map((_, index) => (
          <span key={index} className="text-orange-400 text-2xl">
            &#9733;
          </span>
        ))}

        {[...Array(maxStars - roundedRating)].map((_, index) => (
          <span key={index} className="text-gray-300 text-2xl">
            &#9733;
          </span>
        ))}
      </div>
    );
  };

  const handleAddToCart = (id) => {
    addToCart(id);
    setCart(cart + 1);
  };

  return (
    <div>
      <div className="bg-[#9538E2] text-white p-1">
        <Heading
          title={"Product Details"}
          subtitle={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        />
        <div className="h-28"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 p-6">
        <div>
          <img className="w-[425px] rounded-xl" src={product_image} alt="" />
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">{product_title}</h3>
          <h6 className="font-bold">Price: ${price}</h6>
          <div className="bg-[rgba(48,156,8,0.1)] text-[#309C08] px-2 rounded-full inline-block">
            {availability ? "In Stock" : "Out of Stock"}
          </div>

          <p className="text-gray-500">{description}</p>
          <div>
            <h6 className="font-bold mb-2">Specification:</h6>
            <ol
              className="text-gray-500"
              style={{ listStyleType: "decimal", paddingLeft: "20px" }}
            >
              {specification.map((spec, idx) => (
                <li key={idx}>{spec}</li>
              ))}
            </ol>
          </div>

          <div>
            <h5>Rating:</h5>
            <div className="flex">
              <span>{renderStars()}</span>
              <span className="bg-[rgba(9,8,15,0.05)] px-2 py-1 ml-2 rounded-full">
                {rating}
              </span>
            </div>
          </div>

          <div>
            <button
              onClick={() => handleAddToCart(product_id)}
              className="btn rounded-full bg-[#9538E2] text-white mr-3"
            >
              Add To Card <i className="fa-solid fa-cart-shopping"></i>
            </button>
            <i className="fa-solid fa-heart border rounded-full px-2 py-1 text-xl"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

import toast from "react-hot-toast";

// Get all wishlist items from local storage
const getAllWishlistItems = () => {
  try {
    const all = localStorage.getItem("wishlist");
    return all ? JSON.parse(all) : [];
  } catch (error) {
    console.error("Failed to parse wishlist items from localStorage:", error);
    return [];
  }
};

// Add an item to the wishlist in local storage
const addToWishlist = (item) => {
  const wishlist = getAllWishlistItems();

  // Check if the item already exists in the wishlist by comparing product_id
  const isExist = wishlist.find(
    (wish) => parseInt(wish.product_id) === parseInt(item.product_id)
  );

  if (isExist) {
    toast.error("Item already exists in the wishlist");
    return;
  }

  // Add item to wishlist and save to local storage
  wishlist.push(item);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  toast.success("Item added to the wishlist successfully");
};

// Remove an item from the wishlist in local storage by product_id
const removeWishlistItemFromLS = (id) => {
  const wishlist = getAllWishlistItems();

  const remaining = wishlist.filter(
    (item) => parseInt(item.product_id) !== parseInt(id)
  );

  // Update local storage and show success toast
  localStorage.setItem("wishlist", JSON.stringify(remaining));
  toast.success("Item removed from the wishlist successfully");
};

export { addToWishlist, getAllWishlistItems, removeWishlistItemFromLS };

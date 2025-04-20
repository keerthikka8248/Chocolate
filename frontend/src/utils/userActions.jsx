const API_BASE = 'http://localhost:5000/api/users';

const getToken = () => localStorage.getItem('token');

// Add to Wishlist
export const handleAddToWishlist = async (productId) => {
  try {
    const res = await fetch(`${API_BASE}/addwishlist/:productId`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify({ productId }),
    });
    const data = await res.json();
    if (data.success) {
      alert('Added to wishlist!');
    } else {
      alert(data.message || 'Already in wishlist or failed to add.');
    }
  } catch (err) {
    console.error(err);
    alert('Error adding to wishlist');
  }
};

// Remove from Wishlist
export const handleRemoveFromWishlist = async (productId) => {
  try {
    const res = await fetch(`${API_BASE}/wishlist/${productId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    const data = await res.json();
    if (data.success) {
      alert('Removed from wishlist');
    } else {
      alert(data.message || 'Failed to remove from wishlist');
    }
  } catch (err) {
    console.error(err);
    alert('Error removing from wishlist');
  }
};

// View Wishlist
export const fetchWishlist = async () => {
  try {
    const res = await fetch(`${API_BASE}/wishlist`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    const data = await res.json();
    return data.wishlist || [];
  } catch (err) {
    console.error(err);
    return [];
  }
};

// Add to Cart
export const handleAddToCart = async (productId) => {
  try {
    const res = await fetch(`${API_BASE}/addcart/:productId`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify({ productId }),
    });
    const data = await res.json();
    if (data.success) {
      alert('Added to cart!');
    } else {
      alert(data.message || 'Already in cart or failed to add.');
    }
  } catch (err) {
    console.error(err);
    alert('Error adding to cart');
  }
};

// Remove from Cart
export const handleRemoveFromCart = async (productId) => {
  try {
    const res = await fetch(`${API_BASE}/cart/${productId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    const data = await res.json();
    if (data.success) {
      alert('Removed from cart');
    } else {
      alert(data.message || 'Failed to remove from cart');
    }
  } catch (err) {
    console.error(err);
    alert('Error removing from cart');
  }
};

// View Cart
export const fetchCart = async () => {
  try {
    const res = await fetch(`${API_BASE}/cart`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    const data = await res.json();
    return data.cart || [];
  } catch (err) {
    console.error(err);
    return [];
  }
};

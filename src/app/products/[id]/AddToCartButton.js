"use client";

export default function AddToCartButton({ product }) {
  const handleAddToCart = () => {
    // In a real application, this would add the item to a cart state/context
    alert(`Added ${product.title} to cart!`);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
    >
      Add to Cart - ${product.price}
    </button>
  );
}

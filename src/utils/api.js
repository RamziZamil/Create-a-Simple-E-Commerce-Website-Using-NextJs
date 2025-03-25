export async function getAllProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      next: {
        revalidate: 60, // Revalidate every 60 seconds for ISR
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products. Please try again later.");
  }
}

export async function getProduct(id) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      next: {
        revalidate: 60, // Revalidate every 60 seconds for ISR
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching product:", error);
    throw new Error("Failed to fetch product. Please try again later.");
  }
}

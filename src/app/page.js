import Link from "next/link";
import { getAllProducts } from "@/utils/api";

// This page uses Static Site Generation (SSG)
export default async function Home() {
  const products = await getAllProducts();
  const featuredProducts = products.slice(0, 2); // Show first 2 products as featured

  return (
    <div className="space-y-8">
      <section className="text-center py-12 bg-gray-50 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Welcome to SimpleShop</h1>
        <p className="text-xl text-gray-600 mb-6">
          Discover amazing products at great prices
        </p>
        <Link
          href="/products"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Browse Products
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-blue-600 font-bold">${product.price}</p>
              <Link
                href={`/products/${product.id}`}
                className="mt-2 inline-block text-blue-600 hover:underline"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

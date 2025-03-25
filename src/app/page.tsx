import Link from "next/link";
import { products } from "@/data/products";

export default function Home() {
  const featuredProducts = products.slice(0, 2); // Show first 2 products as featured

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-2xl shadow-xl overflow-hidden mb-12">
        <div className="p-12 text-center">
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
            SimpleShop
          </h1>
          <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
            Curated collections of exceptional products that inspire and delight
          </p>
          <Link
            href="/products"
            className="px-8 py-3 bg-white text-indigo-700 font-semibold rounded-full 
            hover:bg-gray-100 transition-all duration-300 ease-in-out 
            transform hover:-translate-y-1 hover:scale-105 shadow-md"
          >
            Explore Collection
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          Featured Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border-2 border-gray-100 rounded-2xl 
              overflow-hidden transition-all duration-300 
              hover:shadow-2xl hover:border-indigo-200 group"
            >
              <div className="p-6">
                <h3
                  className="text-2xl font-bold text-gray-800 mb-3 
                group-hover:text-indigo-600 transition-colors"
                >
                  {product.name}
                </h3>
                <p className="text-gray-500 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-indigo-600">
                    ${product.price}
                  </span>
                  <Link
                    href={`/products/${product.id}`}
                    className="px-4 py-2 bg-indigo-50 text-indigo-600 
                    rounded-full hover:bg-indigo-100 
                    transition-colors group-hover:bg-indigo-100"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

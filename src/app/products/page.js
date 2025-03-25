import Link from "next/link";
import { getAllProducts } from "@/utils/api";
import Image from "next/image";

export const metadata = {
  title: "Products - SimpleShop",
  description: "Browse our collection of amazing products",
};

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold mb-12 text-center text-gray-800">
        Our Product Collection
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border-2 border-gray-100 rounded-2xl 
            overflow-hidden transform transition-all duration-300 
            hover:shadow-2xl hover:border-indigo-200 hover:-translate-y-2 
            flex flex-col"
          >
            <div className="p-6 flex-grow">
              <h2
                className="text-2xl font-bold mb-3 text-gray-800 
              group-hover:text-indigo-600 transition-colors"
              >
                {product.title}
              </h2>
              <p className="text-gray-500 mb-4 line-clamp-2">
                {product.description}
              </p>
              <div className="flex items-center justify-between mt-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">
                  ${product.price}
                </span>
                <span
                  className="text-sm text-gray-500 bg-gray-100 
                px-3 py-1 rounded-full"
                >
                  {product.category}
                </span>
              </div>
            </div>
            <div className="p-6 pt-0">
              <Link
                href={`/products/${product.id}`}
                className="w-full block text-center px-4 py-3 
                bg-indigo-50 text-indigo-600 font-semibold 
                rounded-full hover:bg-indigo-100 
                transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

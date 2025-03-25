import { getAllProducts, getProduct } from "@/utils/api";
import { notFound } from "next/navigation";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export async function generateMetadata({ params }) {
  try {
    const product = await getProduct(params.id);

    return {
      title: `${product.title} - SimpleShop`,
      description: product.description,
    };
  } catch (error) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found",
    };
  }
}

export default async function ProductPage({ params }) {
  try {
    const product = await getProduct(params.id);

    if (!product) {
      notFound();
    }

    return (
      <div className="min-h-screen  py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/products"
            className="inline-flex items-center mb-8 text-gray-600 hover:text-gray-900 
            transition-colors group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Products
          </Link>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-12 space-y-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <span
                  className="text-sm text-gray-500 bg-gray-100 
                px-3 py-1 rounded-full"
                >
                  {product.category}
                </span>

                <h1 className="text-5xl font-bold text-gray-800 leading-tight">
                  {product.title}
                </h1>

                <div className="flex items-center space-x-2 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 20 20"
                      fill={
                        i < Math.floor(product.rating.rate)
                          ? "currentColor"
                          : "none"
                      }
                      stroke="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-gray-600 ml-2">
                    ({product.rating.count} reviews)
                  </span>
                </div>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">
                {product.description}
              </p>

              <div className="flex items-center justify-between">
                <p className="text-4xl font-bold text-blue-600">
                  ${product.price}
                </p>
                <AddToCartButton product={product} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}

export const metadata = {
  title: "About Us - SimpleShop",
  description: "Learn more about SimpleShop and our mission",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen  py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-12 space-y-12">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
            About SimpleShop
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transforming the way you shop, one product at a time
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-indigo-600">Our Story</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                SimpleShop was founded with a simple yet powerful mission: to
                revolutionize the online shopping experience. We believe in
                providing exceptional products that combine quality,
                affordability, and convenience.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-indigo-600">Our Values</h2>
              <ul className="space-y-3">
                {[
                  {
                    title: "Quality First",
                    description: "We never compromise on product excellence.",
                  },
                  {
                    title: "Customer Satisfaction",
                    description: "Your happiness is our ultimate priority.",
                  },
                  {
                    title: "Fair Pricing",
                    description: "Transparent and competitive pricing for all.",
                  },
                  {
                    title: "Sustainable Practices",
                    description:
                      "Committed to ethical and eco-friendly operations.",
                  },
                ].map((value, index) => (
                  <li
                    key={index}
                    className="bg-gray-50 p-4 rounded-xl border border-gray-100 
                    hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className="w-10 h-10 bg-indigo-100 rounded-full 
                      flex items-center justify-center text-indigo-600 font-bold"
                      >
                        {index + 1}
                      </div>
                      <div>
                        <h3
                          className="font-semibold text-gray-800 
                        group-hover:text-indigo-600 transition-colors"
                        >
                          {value.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 flex items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-indigo-600">
                Our Commitment
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                At SimpleShop, we're more than just an online store. We're a
                community dedicated to delivering exceptional products and
                creating memorable shopping experiences. Our team works
                tirelessly to curate a selection that meets the highest
                standards of quality and value.
              </p>
              <div className="flex space-x-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600">100+</div>
                  <div className="text-gray-600">Product Variety</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600">24/7</div>
                  <div className="text-gray-600">Customer Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

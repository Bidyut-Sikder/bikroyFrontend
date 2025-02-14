import React, { useState } from "react";
import productStore from "../../store/productStore";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Products = () => {
  const { ProductList } = productStore();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(ProductList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProducts = ProductList.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="MainAdsData md:w-3/4">
      <div>
        <p className="text-slate-600 font-semibold text-sm mb-5">
          Total Result Showing: {ProductList.length}
        </p>
      </div>

      {displayedProducts.map((product, index) => {
        return (
          <div key={index}>
            <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 bg-white">
              <Link
                to={`/details/${product._id}`}
                className="flex gap-4 p-4 items-center"
              >
                {/* Image Section (Left Side) */}
                <div className="flex-shrink-0 w-32 h-32 bg-gray-200 rounded-md overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Section (Right Side) */}
                <div className="flex flex-col justify-between flex-grow">
                  <h2 className="text-slate-700 font-semibold text-md line-clamp-2">
                    {product.title}
                    {product.condition === "new" && (
                      <span className="text-xs ml-1 text-green-600">(New)</span>
                    )}
                  </h2>

                  <div className="text-sm text-slate-500 flex gap-2">
                    <p>{product.brand}</p>
                    <p>|</p>
                    <p>{product.district}</p>
                  </div>

                  <p className="text-lg font-bold text-[#6366F1]">
                    Tk {product.price}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        );
      })}

      <div className="w-full mb-20 flex justify-center">
        <ul className="flex flex-row items-center gap-1">
          <li>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 hover:bg-slate-100 hover:text-slate-900 h-10 px-4 py-2 gap-1 pl-2.5"
              aria-label="Go to previous page"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Previous</span>
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, i) => (
            <li key={i}>
              <button
                onClick={() => setCurrentPage(i + 1)}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-slate-950 h-10 w-10 ${
                  currentPage === i + 1
                    ? "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900"
                    : "hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {i + 1}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 hover:bg-slate-100 hover:text-slate-900 h-10 px-4 py-2 gap-1 pr-2.5"
              aria-label="Go to next page"
            >
              <span>Next</span>

              <ChevronRight className="h-4 w-4" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Products;

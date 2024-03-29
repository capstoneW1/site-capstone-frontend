import React, { useState, useMemo } from "react";
import "./TrendingProducts.css";
import Pagination from "../Pagination/Pagination";
import ProductCard from "../ProductCard/ProductCard";

// Shows 12 products on each page
let PageSize = 12;

export default function TrendingProducts({ filteredProducts }) {
  // This function creates a product card for the current set of products
  const renderProducts = () => {
    if (currentProductData) {
      return currentProductData.map((product, i) => {
        return <ProductCard key={i} product={product} />;
      });
    }
  };

  // When we have a new set of relevant products, we set the
  // current page number to be 1.
  React.useEffect(() => {
    setCurrentPage(1);
  }, [filteredProducts]);

  const [currentPage, setCurrentPage] = useState(0);

  // This returns the subset of products that would be found on a certain page.
  // e.g give me the 12 products I would find on page 2
  const currentProductData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    if (filteredProducts) {
      return filteredProducts.slice(firstPageIndex, lastPageIndex);
    }
  }, [currentPage, filteredProducts]);

  if (filteredProducts) {
    return (
      <div className="trending-products">
        <div
          className={
            filteredProducts.length < 12
              ? "tp-content tp-padding"
              : "tp-content"
          }
        >
          {/* Pagination component can be found on both top 
          and bottom of products */}
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={filteredProducts.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
          {/* Render products */}
          <div className="tp-items">{renderProducts()}</div>
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={filteredProducts.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

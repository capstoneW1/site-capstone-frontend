import * as React from "react";
import "./ProductPage.css";
import { useNavigate } from "react-router-dom"
import Footer from "../Footer/Footer"

/*
The ProductPage component will be render/referenced in the App.jsx file
ProductPage is set to the "/product/*" route. The ProductPage componenet will be followed by navbar where
the user can switch to different routes. Then, the ProductPage will render
the ProductDetails component and Footer component which will finalized the content of the 
ProductPage page
 */
export default function ProductPage() {
  const navigate = useNavigate();

  return (
    <div className="product-page">
      
      
      <div className="product-details">
        Product Details
      </div>

      <div className="similar">
        Similar
      </div>
      {/* The Footer component will display information about how to contact our group with an question
      via social media or email */}
      <Footer></Footer>
    </div>
  );
}

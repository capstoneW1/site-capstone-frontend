import * as React from "react";
import "./Landing.css";
import { useNavigate } from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";
import Footer from "../Footer/Footer";
import { useAuthContext } from "../../contexts/auth";
import ProductRow from "../ProductRow/ProductRow";

/*
The landing component will be render/referenced in the App.jsx file
Landing is set to the "/" route so it will be the first page/component 
the user will see. The Landing component will be followed by navbar where
the user can switch to different routes. Lastly the landing Page will call
the AboutUs and Footer component which will finalized the content of the 
landing page
 */
export default function Landing() {
  const { user, setUser } = useAuthContext();
  const navigate = useNavigate();

  const browse = async () => {
    navigate("/trending");
  };

  const signup = async () => {
    navigate("/register");
  };
  return (
    <div className="landing-page">
      <div className="Hero">
        <div className="Header">
          <p className="landing-titles">ELEVATE</p>
          <p className="info">
            Enter the world of sneakers! Whether you are an experienced
            sneakerhead or are taking your first steps, ELEVATE has everything
            for your daily footwear needs.
          </p>
          <div className="landing-button">
            <button className="browse-btn" onClick={browse}>
              Start Browsing
            </button>
            {Object.keys(user).length === 0 ? (
              <button className="signup-btn" onClick={signup}>
                Create an Account
              </button>
            ) : null}
          </div>
        </div>
        <div className="Hero-pic">
          <img
            className="shoeLogo"
            src={require("./shoeLogo.png")}
            alt="Hero Pic"
          />
        </div>
      </div>
      <ProductRow rows={1} cols={4}></ProductRow>
      {/* The AboutUs component will display information about the purpose of our webpage and functionality */}
      <AboutUs></AboutUs>
      {/* The Footer component will display information about how to contact our group with an question
      via social media or email */}
      <Footer></Footer>
    </div>
  );
}

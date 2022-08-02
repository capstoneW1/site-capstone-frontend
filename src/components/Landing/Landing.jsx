import * as React from "react";
import "./Landing.css";
import { useNavigate } from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";
import Footer from "../Footer/Footer";
import { useAuthContext } from "../../contexts/auth";
import ProductRow from "../ProductRow/ProductRow"

/*
The landing component will be render/referenced in the App.jsx file
Landing is set to the "/" route so it will be the first page/component 
the user will see. The Landing componenet will be followed by navbar where
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
          <p className="titles">LOREMIPS</p>
          <p className="info">
            Lorem ipsum dolor adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim ve_niam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <div className="landing-button">
            <button className="browse-btn" onClick={browse}>
              Start Browsing
            </button>
            {Object.keys(user).length === 0 ?
              <button className="signup-btn" onClick={signup}>
              Create an Account
              </button>:
               null}
            {/* <button className="signup-btn" onClick={signup}>
              Create an Account
            </button> */}
          </div>
        </div>
        <div className="Hero-pic">
          <img className="shoeLogo" src={require('./shoeLogo.png')} alt="Hero Pic" />
        </div>
      </div>
      <ProductRow name={"1"} number={"4"}></ProductRow>
      {/* The AboutUs component will display information about the purpose of our webpage and functionality */}
      <AboutUs></AboutUs>
      {/* The Footer component will display information about how to contact our group with an question
      via social media or email */}
      <Footer></Footer>
    </div>
  );
}

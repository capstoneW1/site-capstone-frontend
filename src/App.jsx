import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Landing from "./components/Landing/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterFrom from "./components/RegisterForm/RegisterForm";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <BrowserRouter>
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Navbar />
                    <Landing />
                  </>
                }
              />
              <Route
                path="/login"
                element={
                  <>
                    <Navbar />
                    <Login />
                  </>
                }
              />
              <Route
                path="/register"
                element={
                  <>
                    <Navbar />
                    <RegisterFrom></RegisterFrom>
                  </>
                }
              />
              <Route
                path="/trending"
                element={
                  <>
                    <Navbar />
                    <div>Trending Page</div>
                  </>
                }
              />
              <Route
                path="/profile"
                element={
                  <>
                    <Navbar />
                    <ProfilePage />
                  </>
                }
              />
              <Route path="/product/*" element={<div>Product Page(s)</div>} />
              <Route
                path="*"
                element={
                  <>
                    <Navbar />
                    <div>Not Found</div>
                  </>
                }
              />
              <Route
                path="/productDetail"
                element={
                  <>
                    <ProductDetails />
                  </>
                }
              />
            </Routes>
          </main>
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
}

export default App;

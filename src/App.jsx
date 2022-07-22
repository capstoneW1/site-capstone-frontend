import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Landing from "./components/Landing/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterFrom from "./components/RegisterForm/RegisterForm";
import ProfilePage from "./components/ProfilePage/ProfilePage";
<<<<<<< HEAD
import ProductDetails from "./components/ProductDetails/ProductDetails";
=======
import ProductPage from "./components/ProductPage/ProductPage";
import { AuthContextProvider, useAuthContext } from "./contexts/auth"


/*
The AppContainer component will render the App component nested inside
the AuthContextProvider to have access to the authValue like user and setUser
 */

export default function AppContainer(){
  return (
    <AuthContextProvider>
      <App/>
    </AuthContextProvider>
  )
}
>>>>>>> main

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
              <Route 
                path="/product/*" 
                element={
                  <div>
                    <Navbar />
                    <ProductPage />
                  </div>
                } 
              />
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


import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Landing from "./components/Landing/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterFrom from "./components/RegisterForm/RegisterForm";
import ProfilePage from "./components/ProfilePage/ProfilePage";
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
            </Routes>
          </main>
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
}


import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Landing from "./components/Landing/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterFrom from "./components/RegisterForm/RegisterForm";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import TrendingPage from "./components/TrendingPage/TrendingPage";
import { AuthContextProvider, useAuthContext } from "./contexts/auth";
import ProductPage from "./components/ProductPage/ProductPage";
import SearchPage from "./components/SearchPage/SearchPage"
import ArticleOne from "./components/ArticleOne/ArticleOne"
import ArticleTwo from "./components/ArticleTwo/ArticleTwo"
import ArticleThree from "./components/ArticleThree/ArticleThree"
import ArticlesPage from "./components/ArticlesPage/ArticlesPage";

/*
The AppContainer component will render the App component nested inside
the AuthContextProvider to have access to the authValue like user and setUser
 */

export default function AppContainer() {
  return (
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  );
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
                    <Navbar color={"black"} />
                    <Landing />
                  </>
                }
              />
              <Route
                path="/login"
                element={
                  <>
                    <Navbar color={"black"} />
                    <Login />
                  </>
                }
              />
              <Route
                path="/register"
                element={
                  <>
                    <Navbar color={"black"} />
                    <RegisterFrom />
                  </>
                }
              />
              <Route
                path="/trending"
                element={
                  <>
                    <Navbar color={"grey"} />
                    <TrendingPage />
                  </>
                }
              />
              <Route
                path="/articles"
                element={
                  <>
                    <Navbar color={"black"}/>
                    <ArticlesPage />
                  </>
                }
              />
              <Route
                path="/profile"
                element={
                  <>
                    <Navbar color={"grey"} />
                    <ProfilePage />
                  </>
                }
              />
              <Route
                path="/product/id/:productId"
                element={
                  <div>
                    <Navbar color={"black"} />
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
                path="/search"
                element={
                  <>
                    <Navbar color={"black"} />
                    <SearchPage></SearchPage>
                  </>
                }
              />
              <Route
                path="/article1"
                element={
                  <>
                    <Navbar color={"black"} />
                    <ArticleOne/>
                  </>
                }
              />
              <Route
                path="/article2"
                element={
                  <>
                    <Navbar color={"black"} />
                    <ArticleTwo/>
                  </>
                }
              />
              <Route
                path="/article3"
                element={
                  <>
                    <Navbar color={"black"} />
                    <ArticleThree/>
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

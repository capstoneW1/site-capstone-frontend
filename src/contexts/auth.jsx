import { createContext, useState, useContext } from "react";
import React, { useReducer } from "react";
import apiClient from "../services/apiClient"

const AuthContext = createContext();

/*
AuthContextProvider component will give the authValue to each child
component to have access and use that data for features like the login
and logout feature. Will be rendered in App.jsx
 */
export const AuthContextProvider = ({ children }) => {

  const [user, setUser] = React.useState({});
  const [refresh, setRefresh] = React.useState(false);
  const [initialized, setInitialized] = React.useState(false);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [error, setError] = React.useState({});
  const [wishlistItems, setWishlistItems] = React.useState({});
  const [wishlistList, setWishlistList] = React.useState([]);
  const [searchProducts, setSearchProducts] = React.useState("")

  React.useEffect(() => {
  }, [user]);

  React.useEffect(() => {
    const fetchUser = async () => {
      const {data, error} = await apiClient.fecthUserFromToken()
      if(data){
        setUser(data.user)
      }
      if(error){
        setError(error)
        console.log("error in trending", error)
      }
    }
    const token = localStorage.getItem("sneaker_store_token")
    if(token){
      apiClient.setToken(token)
      fetchUser()
    }
  }, [])

  React.useEffect(() => {
    const getWishlist = async () => {
      try{
          const {data, error} = await apiClient.listWishList(user.id)
          console.log("Data", data)
          setWishlistList(data.wishlist)
      }catch(error) {
          console.log(error)
      }
    }
    getWishlist();
  }, [user])

  

  var authValue = {
    user,
    setUser,
    refresh,
    setRefresh,
    initialized,
    setInitialized,
    isProcessing,
    setIsProcessing,
    error,
    setError,
    wishlistItems,
    setWishlistItems,
    wishlistList,
    setWishlistList,
    searchProducts,
    setSearchProducts
  };

  return (
    <AuthContext.Provider value={authValue}>
      {/* <AuthDispatchContext.Provider value={dispatch}> */}
      {children}
      {/* </AuthDispatchContext.Provider> */}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

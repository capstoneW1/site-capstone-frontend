import * as React from "react";
import "./SearchPage.css";
import SearchProduct from "../SearchProduct/SearchProduct"
import Footer from "../Footer/Footer"
import apiClient from "../../services/apiClient"
import ProductRow from "../ProductRow/ProductRow"
import { useAuthContext} from "../../contexts/auth"

/*
This component is called inside App.jsx
It will get the search term from an auth variable and
we call the api function to get the search results.
This component will then call SearchPRoduct component
that will display the api's return statement that is passed
down as a prop
*/
export default function SearchPage() {
    const { searchProducts} = useAuthContext()
    const [ searchItem, setSearchItem] = React.useState([])
    React.useEffect(() => {
        const fetchSearchProducts = async () => {
          try {
            const { data, error } = await apiClient.searchProduct(searchProducts)
            if (data) {
              setSearchItem(data.products);
            }
          } catch (err) {
          }
        };
        fetchSearchProducts();
      }, [searchProducts]);
  return (
      <div className="search-page">
          <SearchProduct searchItem={searchItem}></SearchProduct>
          <>
            <ProductRow rows={1} cols={4}></ProductRow>
          </>
          <Footer></Footer>
      </div>
  );
}
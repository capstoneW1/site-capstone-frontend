import * as React from "react";
import "./ProductDetails.css";

import { useState } from "react";

export default function ProductDetails() {

    const shoe = {
        id: 1,
        name: "Jordan 4 Retro White Cement (2012)",
        brand: "Jordan",
        colorway: "White/Black-Tech Grey",
        silhouette:"Air Jordan 4",
        release_year: "2012",
        release_date: "2012-02-18",
        retail_price: 160,
        market_price: 220,
        description: "The Air Jordan 4 Retro &#39;Cement’ 2012 combines a white leather upper with Fire Red, Black, and speckled Cement Grey accents. Released in 1989 as one of the four original colorways, the sneaker was retro’d in 1999 and 2016, but this 2012 Air Jordan 4 Retro &#39;Cement’ is the only version that swaps the OG Nike Air branding for a Jumpman logo on the heel. ",
        image_url:"https://image.goat.com/375/attachments/product_template_pictures/images/011/254/032/original/13598_00.png.png",
        current_bid: 200,
        lowest_ask: 180,
        total_sales: 1400,
        
    }

    const[addedToWishlist, setAddedToWishlist]  = useState("Add to Wishlist");


    
    //Called when a user wants to add/remove this item to their wishlist.
    //If the item is not yet added to the wishlist, add to wishlist,
    //change text.
    //Else, if item is already in wishlist, remove from wishlist,
    //change text
    const toggleWishlist = async () => {
        console.log("CLICKED")
        if(addedToWishlist == "Add to Wishlist") {
            setAddedToWishlist("Remove from Wishlist")
        }
        else{
            setAddedToWishlist("Add to Wishlist")
        }
        
    }
  return (
    <div className="product-details">
        <div className="shoe-info">

            {/* Displays info about shoe appearance/history  */}
            <div className="shoe-card">
                <div className="card-header">
                    <h1 className="shoe-name">{shoe.name}</h1>
                    <h2 className="colorway">{shoe.colorway}</h2>
                </div>
                
                <div className="shoe-img">
                    <img src={shoe.image_url} width="300px"/>
                </div>
                <div className="shoe-details">
                    <h2>Details</h2>
                    <p className="retail-price">Retail Price: ${shoe.retail_price}</p>
                    <p className="release-date">Release Date: {shoe.release_date}</p>
                    <p className="description">Description: {shoe.description}</p>
                </div>
            </div>

            {/* This displays the information on the right side of the page. It includes market information */}
            <div className="price-card">

                {/* displays current price of sneaker */}
                <div className="current-price">
                    <h1>Current Price</h1>
                    <h1>${shoe.market_price}</h1>
                </div>
                
                <div className="shoe-size">
                    <h1>Select Size</h1>
                    {/* Render shoe size component */}
                </div>

                <div className="auction-info">
                    {/* displays current bid */}
                    <div className="bids">
                        <p className="bids-header">Current Bid</p>
                        <p className="bids-value">${shoe.current_bid}</p>
                    </div>
                    {/* displays lowest ask */}
                    <div className="asks">
                        <p className="asks-header">Lowest Ask</p>
                        <p className="asks-value">${shoe.lowest_ask}</p>
                    </div>
                    {/* displays total sales*/}
                    <div className="total sales">
                        <p className="sales-header">Total Sales</p>
                        <p className="sales-value">${shoe.total_sales}</p>
                    </div>
                </div>

                <div className="toggle-wishlist">
                    {/* Button to add to wishlist */}
                    <button className="toggle-btn" onClick={toggleWishlist}>
                        {addedToWishlist}
                    </button>
                </div>

                <div className="email-updates">
                    <h4>Receive updates</h4>
                    {/* render email updates component */}
                </div>

            </div>
        </div>

        <div className="price-history">
            <h1>Price History</h1>
        </div>

    </div>
  );
}

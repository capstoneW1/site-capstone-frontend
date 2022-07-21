import * as React from "react";
import "./ProductDetails.css";

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
  return (
    <div className="product-details">
        <div className="shoe-info">
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

            <div className="price-card">
                <p>price card</p>
            </div>
        </div>

    </div>
  );
}

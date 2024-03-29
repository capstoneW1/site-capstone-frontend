import * as React from "react";
import "./ArticlesPage.css";
import Footer from "../Footer/Footer";
import image1 from "./img/image1.png";
import image2 from "./img/image2.png";
import image3 from "./img/image3.png";
import image4 from "./img/image4.png";
import image5 from "./img/image5.png";
import { useNavigate } from "react-router-dom"
/*
Displays Article Previews
*/
export default function ArticlesPage() {
  const navigate = useNavigate()
  const article1 = async () => {
    navigate("/article1")
  }
  const article2 = async () => {
    navigate("/article2")
  }
  const article3 = async () => {
    navigate("/article3")
  }
  return (
    <div className="articles-page">
      <div className="articles-content">
        <p className="ap-title">From Our Team to You</p>
        <div className="ap-cols">
          {/* first column */}
          <div className="ap-col">
            <img className="ap-img" src={image1} alt="Article Row One Shoe Image One"/>
            {/* first article */}
            <div className="ap-article" onClick={article1}>
              <p className="ap-subtitle">
                Easy ways to recognize fake sneakers
              </p>
              <p className="preview">
                Shoe quality inspection is an essential skill for new resellers
                and customers to learn. In a world where authentic pieces and
                counterfeit kicks coexist, it can be difficult to differentiate
                between the two. We’ve curated a list of quick and easy tips to
                ensure that your product is authentic and in the best condition
                possible.
              </p>
            </div>
            <img className="ap-img" src={image2} alt="Article Row One Shoe Image Two"/>
            <div className="line"></div>
          </div>
          {/* second column */}
          <div className="ap-col-mid">
            <img className="ap-img" src={image3} alt="Article Row Teo Shoe Image One" />
            {/* second article */}
            <div className="ap-article" onClick={article2}>
              <p className="ap-subtitle-mid">
                How to Purchase Sneakers from Resellers Without Getting Scammed
              </p>
              <p className="preview">
                After hours of surfing the Internet, you’ve finally landed on
                the perfect pair of sneakers. High-res photos, a price
                well-within your budget, and a quick transaction guarantee. At a
                glance, this might seem like a great deal. However, under the
                surface, you might be the latest victim of a textbook reseller
                scam. Here are some tips and tricks to steer clear of these
                online schemes during your next shoe hunt.
              </p>
            </div>
            <img className="ap-img" src={image4} alt="Article Row Two Shoe Image Two"/>
          </div>
          {/* third column */}
          <div className="ap-col">
            {/* third article */}
            <div className="ap-article" onClick={article3}>
              <p className="ap-subtitle">
                Here are the Top 5 Most Reputable Marketplaces for Your Next
                Sneaker Purchase
              </p>
              <p className="preview">
                With the influx of sneaker reseller sites on the Web, navigating
                the world of where to buy a quality pair can feel overwhelming.
                Unless you know where to look, you might find yourself
                overpaying, making a shady deal, or purchasing a counterfeit on
                the secondary market. Luckily, we’ve narrowed down our favorite
                online sneaker marketplaces to save you the hassle.
              </p>
            </div>
            <img className="ap-img" src={image5} alt="Article Row Three Shoe Image One" />
            <div className="line"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

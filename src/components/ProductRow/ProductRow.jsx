import React, { useState } from "react";
import "./ProductRow.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import apiClient from "../../services/apiClient";
import Carousel from "better-react-carousel";

/*
These two variables are in charge of styling the css of the next and previous arrow
*/
const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <img
    className="arrow"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKSqOihwPfB1_sBSSYQvsViOAdUtE7TNuG3Q&usqp=CAU"
    alt="prevArrow"
    {...props}
  />
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <img
    className="arrow"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKSqOihwPfB1_sBSSYQvsViOAdUtE7TNuG3Q&usqp=CAU"
    alt="nextArrow"
    {...props}
  />
);
/*
This component is being render in the LandingPage component
which call an api from apiClient to render a carousel of sneakers
*/
export default function ProductRow(props) {
  const [sneaker, setProducts] = useState([]);
  const [error, setError] = useState({});
  React.useEffect(() => {
    const getSneakers = async () => {
      const { data, error } = await apiClient.getProducts();
      if (data) {
        setProducts(data.products);
      }
      if (error) {
        setError(error);
        console.error("error in trending", error);
      }
    };
    getSneakers();
  }, []);

  return (
    <div className="product-row-container">
      <p className="pr-titles">Featured</p>

      <Carousel cols={4} rows={1} gap={0} loop showDots>
        {sneaker.slice(0, 12).map((ele, idx) => {
          return (
            <Carousel.Item>
              <div className="pr">
                <ProductCard product={ele} key={idx}></ProductCard>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

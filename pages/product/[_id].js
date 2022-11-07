import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  AiFillStar,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar
} from "react-icons/ai";
import Product from "../../components/Product";
import { products } from "../../components/shared/fakeDatas";
import { useStateContext } from "../../context/StateContext";

const ProductDetails = () => {
  const router = useRouter();
  // console.log("router", router);
  const { _id } = router.query;

  const theProduct = products.find((product) => product._id === _id);
  const { name, price, image, details } = theProduct;

  // onmouse hover change product image
  const [index, setIndex] = useState(0);
  const { qty, incQty, decQty, addToCart } = useStateContext();

  return (
    <>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={image && image[index]} className="product-detail-image" />
          </div>
          <div className="small-images-container">
            {image?.map((img, i) => (
              <img
                key={i}
                src={img}
                className={
                  i === 0 ? "small-image selected-image" : "small-image"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">${price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart" onClick={()=>addToCart(theProduct,qty)}>
              Add to Cart
            </button>
            <button
              type="button"
              className="buy-now"
              // onClick=""
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

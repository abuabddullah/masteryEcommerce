import Link from "next/link";
import React from "react";

const Product = ({ product: { _id,image,name,price } }) => {
  return (
    <div>
      <Link href={`/product/${_id}`}>
        <div className="product-card">
          <img
            src={image && image[0]}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;

import Meta from "../components/Meta";
import Product from "../components/Product.js";
import FooterBanner from "./../components/FooterBanner";
import HeroBanner from "./../components/HeroBanner";

import { useStateContext } from "../context/StateContext";

export default function Home() {
  const { bannerData, products, footerBanner } = useStateContext();
  return (
    <>
      <Meta title="Home - Mastery Ecommerce" />
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of Many Variations</p>
      </div>

      <div className="products-container">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <FooterBanner footerBanner={footerBanner} />
    </>
  );
}

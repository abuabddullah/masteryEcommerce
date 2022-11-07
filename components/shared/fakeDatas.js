const bannerData = [
  {
    _id: "1",
    smallText: "Beats Solo Air",
    midText: "Summer Sale",
    largeText1: "Fine",
    largeText2: "Smile",
    image:
      "https://res.cloudinary.com/dglsw3gml/image/upload/v1667701370/Mastery_Ecommerce/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555_hfbgji.webp",
    product: "headphones",
    buttonText: "Shop Now",
    desc: "Best Headphones in the world",
    discount: "20% off",
  },
];

const products = [
  {
    _id: "1",
    name: "Beats Solo Air",
    image: [
      "https://res.cloudinary.com/dglsw3gml/image/upload/v1667701372/Mastery_Ecommerce/headphones_b_3_pjxfo1.webp",
      "https://res.cloudinary.com/dglsw3gml/image/upload/v1667701372/Mastery_Ecommerce/headphones_c_3_hul1pg.webp",
      "https://res.cloudinary.com/dglsw3gml/image/upload/v1667701371/Mastery_Ecommerce/headphones_a_1_url6f1.webp",
      "https://res.cloudinary.com/dglsw3gml/image/upload/v1667701371/Mastery_Ecommerce/headphones_a_2_dnaie2.webp",
    ],
    price: 200,
    description: "Best Headphones in the world",
    category: "headphones",
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
    details:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, sequi rerum. Tempora ad recusandae architecto! Autem cumque dignissimos odio enim aliquam vero expedita tenetur maiores! Consequatur quasi cum beatae laboriosam!,",
  },
  {
    _id: "2",
    name: "Wrist Watch",
    image: [
      "https://res.cloudinary.com/dglsw3gml/image/upload/v1667701373/Mastery_Ecommerce/watch_3_wldy2p.webp",
      "https://res.cloudinary.com/dglsw3gml/image/upload/v1667701373/Mastery_Ecommerce/watch_2_qgfvte.webp",
      "https://res.cloudinary.com/dglsw3gml/image/upload/v1667701373/Mastery_Ecommerce/watch_1_g4czht.webp",
      "https://res.cloudinary.com/dglsw3gml/image/upload/v1667701374/Mastery_Ecommerce/watch_4_kvqjcs.webp",
    ],
    price: 200,
    description: "Best Watch in the world",
    category: "Watch",
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
    details:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, sequi rerum. Tempora ad recusandae architecto! Autem cumque dignissimos odio enim aliquam vero expedita tenetur maiores! Consequatur quasi cum beatae laboriosam!",
  },
  {
    _id: "3",
    name: "TWS Buds",
    image: [
      "https://res.cloudinary.com/dglsw3gml/image/upload/v1667701373/Mastery_Ecommerce/speaker3_zxc1hy.webp",
      "https://res.cloudinary.com/dglsw3gml/image/upload/v1667701373/Mastery_Ecommerce/speaker4_e1ncti.webp",
      "https://res.cloudinary.com/dglsw3gml/image/upload/v1667701372/Mastery_Ecommerce/speaker1_qdt4wb.webp",
      "https://res.cloudinary.com/dglsw3gml/image/upload/v1667701372/Mastery_Ecommerce/speaker2_cxf7hr.webp",
    ],
    price: 200,
    description: "Best TWS in the world",
    category: "TWS",
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
    details:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, sequi rerum. Tempora ad recusandae architecto! Autem cumque dignissimos odio enim aliquam vero expedita tenetur maiores! Consequatur quasi cum beatae laboriosam!",
  },
  {
    _id: "4",
    name: "Neck Bands",
    image: [
      "https://res.cloudinary.com/dglsw3gml/image/upload/v1667701371/Mastery_Ecommerce/earphones_c_1_v0ehkc.webp",
      "https://res.cloudinary.com/dglsw3gml/image/upload/v1667701371/Mastery_Ecommerce/earphones_c_3_esumos.webp",
      "https://res.cloudinary.com/dglsw3gml/image/upload/v1667701371/Mastery_Ecommerce/earphones_c_1_v0ehkc.webp",
    ],
    price: 200,
    description: "Best Neck Bands in the world",
    category: "TWS",
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
    details:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, sequi rerum. Tempora ad recusandae architecto! Autem cumque dignissimos odio enim aliquam vero expedita tenetur maiores! Consequatur quasi cum beatae laboriosam!",
  },
  {
    _id: "5",
    name: "BT Headphones",
    image: [
      "https://res.cloudinary.com/dglsw3gml/image/upload/v1667701370/Mastery_Ecommerce/earphones_b_2_digze7.webp",
      "https://res.cloudinary.com/dglsw3gml/image/upload/v1667701370/Mastery_Ecommerce/earphones_b_4_myq8ju.webp",
      "https://res.cloudinary.com/dglsw3gml/image/upload/v1667701370/Mastery_Ecommerce/earphones_b_3_pwejuv.webp",
    ],
    price: 200,
    description: "Best BT Headphones in the world",
    category: "TWS",
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
    details:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, sequi rerum. Tempora ad recusandae architecto! Autem cumque dignissimos odio enim aliquam vero expedita tenetur maiores! Consequatur quasi cum beatae laboriosam!",
  },
  {
    _id: "6",
    name: "Wired Headphones",
    image: [
      "https://res.cloudinary.com/dglsw3gml/image/upload/v1667701370/Mastery_Ecommerce/earphones_a_2_ggkhv3.webp",
      "https://res.cloudinary.com/dglsw3gml/image/upload/v1667701370/Mastery_Ecommerce/earphones_a_1_heuku4.webp",
      "https://res.cloudinary.com/dglsw3gml/image/upload/v1667701370/Mastery_Ecommerce/earphones_a_4_pwmd51.webp",
      "https://res.cloudinary.com/dglsw3gml/image/upload/v1667701370/Mastery_Ecommerce/earphones_a_3_uxtckt.webp",
    ],
    price: 200,
    description: "Best Wired Headphones in the world",
    category: "TWS",
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
    details:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, sequi rerum. Tempora ad recusandae architecto! Autem cumque dignissimos odio enim aliquam vero expedita tenetur maiores! Consequatur quasi cum beatae laboriosam!",
  },
];

const footerBanner = {
  _id: "1",
  discount: "20% off",
  largeText1: "Fine",
  largeText2: "Smile",
  saleTime: "Sale ends in 2 days",
  smallText: "Beats Solo Air",
  midText: "Summer Sale",
  desc: "Best Headphones in the world",
  buttonText: "Shop Now",
  image:
    "https://res.cloudinary.com/dglsw3gml/image/upload/v1667701370/Mastery_Ecommerce/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555_hfbgji.webp",

  product: "headphones",
};

export { bannerData, products, footerBanner };

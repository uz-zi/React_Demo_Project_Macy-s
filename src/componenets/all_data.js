import pic1 from "../images/10631691_fpx.png";
import pic2 from "../images/27024606_fpx.png";
import pic3 from "../images/8982930_fpx.png";
import pic4 from "../images/28794642_fpx.png";
import pic5 from "../images/27024606_fpx.png";
import pic6 from "../images/10631691_fpx.png";

export const products = [
  {
    id: 1,
    images: {
      [pic1]: "red",
      [pic2]: "orange",
      [pic3]: "pink",
      [pic4]: "yellow",
      [pic5]: "blue",
    },
    variants: {
      1: {
        images: [pic2, pic3]
      },
      2: {
        images: [pic1, pic2,]
      },
      3:{
        images: [pic1, pic2]
      },
      4:{
        images: [pic1, pic2]
      },
      
    },
    brandName: "Bar III",
    description: "Men's Slim-Fit Contrast Vine Dress Shirt, Created for Macy's",
    price: 100.0,
    salePrice: 80.0,
    reviews: 4,
    size: "medium"
  },
  {
    id: 2,
    images: {
      [pic1]: "red",
      [pic2]: "orange",
      [pic3]: "pink",
      [pic4]: "yellow",
      [pic5]: "blue",
    },
    variants: {
      1: {
        images: [pic1, pic2,pic3]
      },
      2: {
        images: [pic1, pic2]
      },
      3:{
        images: [pic1, pic2]
      },
      4: {
        images: [pic1, pic2,pic3]
      },
      
      
    },
    brandName: "Hugo Boss",
    description: "Men's Regular Fit Letto Plaid Dress Shirt, Created for Macy's",
    price: 120.0,
    salePrice: 90.0,
    reviews: 5,
    size: "small"
  },
  {
    id: 3,
    images: {
      [pic1]: "red",
      [pic2]: "orange",
      [pic3]: "pink",
    },
    variants: {
      1: {
        images: [pic1, pic2,pic3]
      },
      2: {
        images: [pic1, pic2]
      },
      3: {
        images: [pic1, pic2]
      },
      4: {
        images: [pic1, pic2,pic3]
      },
      
    },
    brandName: "Perry Ellis",
    description: "Men's Slim Fit Performance Long Sleeve Geometric Dress Shirt",
    price: 150.0,
    salePrice: 110.0,
    reviews: 3,
    size: "large"
  },
  {
    id: 4,
    images: {
      [pic1]: "red",
      [pic2]: "orange",
      [pic3]: "pink",
      [pic4]: "yellow",
      [pic5]: "blue",
    },
    variants: {
      1: {
        images: [pic1, pic2,pic3]
      },
      2: {
        images: [pic1, pic2]
      },
      3:{
        images: [pic1, pic2]
      },
      4: {
        images: [pic1, pic2,pic3]
      },
      
    },
    brandName: "Tallia",
    description: "Men's Athletic Fit Poplin Dress Shirt",
    price: 130.0,
    salePrice: 85.0,
    reviews: 4,
    size: "medium"
  },
  {
    id: 5,
    images: {
      [pic1]: "red",
      [pic2]: "orange",
      [pic3]: "pink",
      [pic4]: "yellow",
      [pic5]: "blue",
    },
    variants: {
      1: {
        images: [pic1, pic2,pic3]
      },
      2: {
        images: [pic1, pic2]
      },
      3:{
        images: [pic1, pic2]
      },
      4: {
        images: [pic1, pic2,pic3]
      },
      
    },
    brandName: "Nick Graham",
    description: "Men's Slim-Fit 4-Way Stretch Medallion Dress Shirt, Created for Macy's",
    price: 95.0,
    reviews: 2,
    size: "medium"
  },
  {
    id: 6,
    images: {
      [pic1]: "red",
      [pic2]: "orange",
      [pic3]: "pink",
      [pic4]: "yellow",
      [pic5]: "blue",
    },variants: {
      1: {
        images: [pic1, pic2,pic3]
      },
      2: {
        images: [pic1, pic2]
      },
      3:{
        images: [pic1, pic2]
      },
      4: {
        images: [pic1,pic3]
      },
    },
    brandName: "Van Heusen",
    description: "Men's Slim-Fit Temperature Regulating Dress Shirt, Created for Macy's",
    price: 110.0,
    salePrice: 75.0,
    reviews: 5,
    size: "small"
  },
  {
    id: 7,
    images: {
      [pic2]: "blue",
      [pic4]: "green",
    },
    variants: {
      1: {
        images: [pic1, pic2,pic3]
      },
      2: {
        images: [pic1, pic2]
      },
      3:{
        images: [pic1, pic2]
      },
      4: {
        images: [pic1,pic3]
      },
      
    },
    brandName: "Calvin Klein",
    description: "Men's Extreme Slim Fit Dress Shirt",
    price: 145.0,
    salePrice: 95.0,
    reviews: 4,
    size: "large"
  },
]
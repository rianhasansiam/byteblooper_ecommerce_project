import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Boys from "./pages/kids/Boys";
import Girls from "./pages/kids/Girls";
import MAccessories from "./pages/Men/MAccessories";
import MClothing from "./pages/Men/MClothing";
import MFootwear from "./pages/Men/MFootwear";
import WAccessories from "./pages/Women/WAccessories";
import WClothing from "./pages/Women/WClothing";
import WFootwear from "./pages/women/WFootwear";
import AllProduct from "./pages/AllProduct";
import NewArrivals from "./pages/NewArrivals";
import Orders from "./pages/Orders";
import Wishlist from "./pages/Wishlist";
import Brands from "./pages/Brands";
import AddToCart from "./pages/addtoCart/AddtoCart";
import ProductDetail from "./pages/productDetails/ProductDetail";

const Root = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/kids/boys',
        element: <Boys></Boys>
      },
      {
        path: '/kids/girls',
        element: <Girls></Girls>
      },
      {
        path: '/men/accessories',
        element: <MAccessories></MAccessories>
      },
      {
        path: '/men/clothing',
        element: <MClothing></MClothing>
      },
      {
        path: '/men/footwear',
        element: <MFootwear></MFootwear>
      },
      {
        path: '/women/accessories',
        element: <WAccessories></WAccessories>
      },
      {
        path: '/women/clothing',
        element: <WClothing></WClothing>
      },
      {
        path: '/women/footwear',
        element: <WFootwear></WFootwear>
      },
      {
        path: '/allProducts',
        element: <AllProduct></AllProduct>
      },
      {
        path: '/new-arrivals',
        element: <NewArrivals></NewArrivals>
      },
      {
        path: '/orders',
        element: <Orders></Orders>
      },
      {
        path: '/wishlist',
        element: <Wishlist></Wishlist>
      },
      {
        path: '/brands',
        element: <Brands></Brands>
      },
      {
        path: '/addto-cart',
        element: <AddToCart></AddToCart>
      },
      {
        path: '/product-detail',
        element: <ProductDetail></ProductDetail>
      }
    ]
  }
]);

export default Root
<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import Review from "./components/Review";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/review" element={<Review />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/product/:productKey" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
=======
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';


function App() {

  return (
    <>
  <Header></Header>
  <Shop></Shop>
    </>
  )
}

export default App
>>>>>>> 4d0f0e00976f506594f4061c9aeca1340740d877

import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import User from "./pages/User";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import Order from "./pages/Order";
function App() {
  return (
    <div style={{ marginLeft: 200 }} className="wrapper container" id="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/blog" element={<Blogs />}></Route>
        <Route path="/blog/:id" element={<BlogDetail />}></Route>
        <Route path="/order" element={<Order />}></Route>
      </Routes>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;

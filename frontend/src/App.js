import Header from "./components/Header";
import Home from "./screens/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./screens/Cart";
import ProductScreen from "./screens/ProductScreen";
import Payment from "./screens/Payment";
import Thankyou from "./screens/Thankyou";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/product/:id" element={<ProductScreen/>}/>
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/thankyou" element={<Thankyou/>}/>

          <Route path="/"  element={<Home/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

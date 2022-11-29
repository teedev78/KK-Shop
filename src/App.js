import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
// import Header from "./components/Header"

// Pages
import {
  Categories,
  Cart,
  Explore,
  Footer,
  ForgotPassword,
  Products,
  Profile,
  Promotions,
  SignIn,
  SignUp,
} from "./pages";

//CSS
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;

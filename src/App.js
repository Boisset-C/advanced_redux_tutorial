import Cart from "./components/Cart/Cart";
import { useSelector } from "react-redux";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import uiSlice from "./store/ui-slice";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;

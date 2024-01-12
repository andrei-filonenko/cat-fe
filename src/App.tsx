import "./App.css";
import Catalog from "./components/Catalog";
import ShoppingCart from "./components/ShoppingCart";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={<h1>loading...</h1>}>
      <Catalog />
      <ShoppingCart></ShoppingCart>
    </Suspense>
  );
}

export default App;

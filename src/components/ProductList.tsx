import { CartItem } from "../types";
import ProductCard from "./ProductCard";

export default function ProductList({ products }: { products: CartItem[] }) {
  return (
    <>
      {products.map((p) => (
        <ProductCard
          key={p.sku}
          sku={p.sku}
          displayName={p.displayName}
          unitPrice={p.unitPrice}
          amount={p.amount}
        />
      ))}
    </>
  );
}

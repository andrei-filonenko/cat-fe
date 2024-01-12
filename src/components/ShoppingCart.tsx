import { MaterialSymbol } from "react-material-symbols";
import { gql } from "../__generated__";
import { useMutation, useSuspenseQuery } from "@apollo/client";
import Summary from "./Summary";
import Promcode from "./Promcode";
import ProductList from "./ProductList";
import { SyntheticEvent, useState } from "react";
import EmptyState from "./EmptyState";
import Checkout from "./Checkout";
import * as stylex from "@stylexjs/stylex";


const CART_QUERY = gql(/* GraphQL */ `
  query CartQuery {
    cart {
      discountPercentage
      products {
        amount
        displayName
        sku
        unitPrice
      }
    }
    promcode
  }
`);

const CLEAR_CART = gql(/* GraphQL */`
   mutation ClearCart {
    clearCart {
      sku
    }
   }
`)

const CHECKOUT = gql(/* GraphQL */`
   mutation Checkout {
    clearCart {
      sku
    }
   }
`)


export default function ShoppingCart() {
  const {
    data: {
      cart: { products, discountPercentage },
      promcode,
    },
  } = useSuspenseQuery(CART_QUERY);
  const [isCheckingOut, setCheckingOut] = useState(false);
  const [clearCart, __] = useMutation(CLEAR_CART);
  const [checkout, _] = useMutation(CHECKOUT);


  function handleClearCart(e: SyntheticEvent) {
    e.preventDefault(); 
    clearCart({
      refetchQueries: [
        'CartQuery',
        'CatalogQuery'
      ]
    });
  }
  
  function handleCheckout(e: SyntheticEvent) {
    e.preventDefault(); 
    setCheckingOut(true)
    checkout({
      refetchQueries: [
        'CartQuery',
        'CatalogQuery'
      ]
    });
  }

  return (
    <div {...stylex.props(s.cart)}>
      {!!products.length && (
        <div {...stylex.props(s.title)}>
          <MaterialSymbol size={24} icon="shopping_cart" {...stylex.props(s.shopipingCartIcont)} />
          <h2 className="card-title">Shopping Cart</h2>
          <button onClick={handleClearCart} {...stylex.props(s.clearCart)}>
            Clear the cart
            <MaterialSymbol size={28} icon="delete_sweep" />
          </button>
        </div>
      )}
      <div className="product-list" {...stylex.props(s.productList)}>
        {products.length ? <ProductList products={products} /> : <EmptyState />}
      </div>
      {!!products.length && (
        <div className="cart-controls">
          <Promcode
            promcode={promcode || ""}
            discount={discountPercentage}
          ></Promcode>
          <Summary products={products} discount={discountPercentage} />
        </div>
      )}
      {!!products.length && (
        <div className="actions">
          <button
            className="checkout"
            onClick={handleCheckout}
            disabled={!products.length}
          >
            Procede to checkout
          </button>
        </div>
      )}
      <Checkout isOpen={isCheckingOut} onClose={() => setCheckingOut(false)} />
    </div>
  );
}

const s = stylex.create({
  cart: {
    width: 740,
    height: 1101,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 10,
    paddingBottom: 10,
    background: "white",
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.12)",
    borderRadius: 8,
    overflow: "hidden",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 10,
    display: "inline-flex",
  },
  title: {
    alignSelf: "stretch",
    paddingTop: 16,
    paddingBottom: 16,
    borderBottom: "1px #D1D1D1 solid",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
    display: "inline-flex",
    background: "linear-gradient(90deg, #2F72C0 0%, #B42FC0 100%)",
    backgroundClip: "text",
    color: "rgba(0,0,0,0)",
  },
  titleText: {
    flex: 1,
    color: "#2F72C0",
    fontSize: 28,
    fontFamily: "IBM Plex Sans",
    fontWeight: "600",
    lineHeight: 40,
    letterSpacing: 0.38,
    wordWrap: "break-word",
  },
  shopipingCartIcont: {
    color: "#2F72C0",
  },
  clearCart: {
    marginLeft: "auto",
    background: "none",
    size: 24,
    border: "1px solid #010101",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "8px 12px",
    borderRadius: "4px",
  },
  productList: {
    alignSelf: "stretch",
    height: 524,
    paddingTop: 16,
    paddingBottom: 16,
    borderBottom: "1px #D1D1D1 solid",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 8,
    display: "flex",
  },
});
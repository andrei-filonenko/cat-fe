import { gql } from "../__generated__";
import { CatalogProduct } from "../types";
import CatalogItem from "./CatalogItem";
import { useMutation, useSuspenseQuery } from "@apollo/client";
import * as stylex from "@stylexjs/stylex";
import { spacing } from "../tokens.stylex";

const s = stylex.create({
  catalog: {
    width: "363px",
    paddingTop: spacing.s4,
    paddingBottom: spacing.s4,
    borderBottom: "1px #D1D1D1 solid",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 8,
    display: "inline-flex",
  },
});

const CATALOG_QUERY = gql(/* GraphQL */ `
  query CatalogQuery {
    catalog {
      amount
      sku
      displayName
      selected
      unitPrice
    }
  }
`);

const ADD_PRODUCT_TO_CART = gql(/* GraphQL */ `
  mutation AddProducts($skus: [String!]!) {
    addProducts(skus: $skus) {
      sku
      displayName
    }
  }
`);

export default function Catalog() {
  const {
    data: { catalog },
  } = useSuspenseQuery(CATALOG_QUERY);
  const [addProductToCart, _] = useMutation(ADD_PRODUCT_TO_CART);

  function handleAdd(sku: string) {
    addProductToCart({
      variables: { skus: [sku] },
      refetchQueries: ["CartQuery", "CatalogQuery"],
    });
  }
  
  return (
    <div {...stylex.props(s.catalog)}>
      {catalog
        .map((p: CatalogProduct) => (
          <CatalogItem
            key={p.sku}
            {...p}
            addToCart={handleAdd}
          />
        ))
        .filter((x) => x)}
    </div>
  );
}

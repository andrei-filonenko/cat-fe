import { MouseEvent } from "react";
import { MaterialSymbol } from "react-material-symbols";
import { CartItem } from "../types";
import { formatCurrency } from "../util";
import { useDebounce } from "../hooks/debounce";
import { useEffect, useState } from "react";
import { gql } from "../__generated__";
import { useMutation } from "@apollo/client";
import * as stylex from "@stylexjs/stylex";

const SET_AMOUNT = gql(/* GraphQL */ `
  mutation SetAmount($sku: String!, $newValue: Int!) {
    setAmount(sku: $sku, newValue: $newValue) {
      sku
      displayName
      amount
    }
  }
`);

const REMOVE_PRODUCT = gql(/* GraphQL */ `
  mutation RemoveProducts($skus: [String]) {
    removeProducts(skus: $skus) {
      sku
      displayName
    }
  }
`);

type ProductCardProps = CartItem;

export default function ProductCard({
  sku,
  displayName,
  unitPrice,
  amount: initialAmount,
}: ProductCardProps) {

  const [amount, setAmount] = useState(initialAmount);
  const debouncedAmount = useDebounce(amount, 200)
  const [setAmountMutation, __] = useMutation(SET_AMOUNT);
  const [removeProductMutation, _] = useMutation(REMOVE_PRODUCT);
  
  function handleRemove(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    removeProductMutation({
      variables: {
        skus: [sku]
      },
      refetchQueries: [
        'CatalogQuery',
        'CartQuery'
      ]
    })
  }

  useEffect(() => {
    setAmountMutation({
      variables: { sku, newValue: debouncedAmount },
      refetchQueries: ["CartQuery"],
    });
  }, [debouncedAmount, setAmountMutation, sku]);

  const isIncDisabled = amount >= 1000;
  const isDecDisabled = amount <= 1;

  function handleIncrement(e: MouseEvent<HTMLElement>) {
    e.preventDefault();
    if (!isIncDisabled) {
      setAmount(amount + 1)
    }
  }

  function handleDecrement(e: MouseEvent<HTMLElement>) {
    e.preventDefault()
    if (!isDecDisabled) {
      setAmount(amount - 1)
    }
  }

  return (
    <div {...stylex.props(s.cardItem)}>
      <div {...stylex.props(s.left)}>
        <div className="product-info">
          <h3 className="product-name">{displayName}</h3>
          <div className="product-caption">SKU: {sku}</div>
        </div>
      </div>
      <div {...stylex.props(s.right)}>
        <div className="stepper">
          <button
            className="inc"
            onClick={handleIncrement}
            disabled={isIncDisabled}
          >
            <MaterialSymbol icon="add" />
          </button>
          <div className="amount">{amount}</div>
          <button
            className="dec"
            onClick={handleDecrement}
            disabled={isDecDisabled}
          >
            <MaterialSymbol icon="remove" />
          </button>
        </div>
        <div className="price">{formatCurrency(amount * unitPrice)}</div>
        <button className="remove" onClick={handleRemove}>
          <MaterialSymbol icon="delete" />
        </button>
      </div>
    </div>
  );
}

const s = stylex.create({
  cardItem: {alignSelf: 'stretch', paddingBottom: 12, justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'},
  left: {justifyContent: 'flex-start', alignItems: 'flex-start', gap: 62, display: 'flex'},
  right: {flex: '1 1 0', alignSelf: 'stretch', justifyContent: 'flex-end', alignItems: 'center', gap: 12, display: 'flex'}
});
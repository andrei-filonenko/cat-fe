import {  } from './Promcode';
import { CartItem } from "../types";
import { formatCurrency } from "../util";

type SummaryProps = {
  products: CartItem[];
  discount: number;
};

const ActionProposition = ({ products, discount }: SummaryProps) => {
  const subtotal = products.reduce<number>((sum, { amount, unitPrice }) => {
    return sum + amount * unitPrice;
  }, 0);
  const discountValue = (subtotal * discount) / 100;
  const total = subtotal - discountValue;

  return (
    <>
      <div className="action-proposition">
        <div className="subtotal">
          <h3>Subtotal</h3>
          <div className="value">{formatCurrency(subtotal)}</div>
        </div>
        <div className="discount">
          <h3>Discount</h3>
          <div className="value">
            {discount}% (-{formatCurrency(discountValue)}$)
          </div>
        </div>
        <div className="total">
          <h3>Total</h3>
          <div className="value">{formatCurrency(total)}</div>
        </div>
      </div>
    </>
  );
};

export default ActionProposition;

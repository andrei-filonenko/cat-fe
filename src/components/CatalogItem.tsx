import { MaterialSymbol } from "react-material-symbols";
import { CatalogProduct } from "../types";
import { formatCurrency } from "../util";
import * as stylex from "@stylexjs/stylex";
import { colors, spacing } from "../tokens.stylex";


type CatalogItemProps = CatalogProduct & {
  addToCart: (sku: string) => void 
};

export default function CatalogItem({
  sku,
  displayName,
  unitPrice,
  selected,
  addToCart
}: CatalogItemProps) {
  const price = formatCurrency(unitPrice);

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    console.log("click");
    addToCart(sku); 
  }

  return (
    <div {...stylex.props(s.catalogItem, !!selected && s.disabled)}>
      <div {...stylex.props(s.left)}>
        <div {...stylex.props(s.productInfo)}>
          <div {...stylex.props(s.displayName)}>{displayName}</div>
          <div {...stylex.props(s.caption)}>SKU: {sku}</div>
        </div>
      </div>
      <div {...stylex.props(s.right)}>
        <div {...stylex.props(s.price)}>{price}</div>
        <button {...stylex.props(s.btn)} onMouseDown={handleClick} disabled={!!selected}>
          <MaterialSymbol {...stylex.props(s.addToCart)} icon="add" />
        </button>
      </div>
    </div>
  );
}

const s = stylex.create({
  disabled: {
    opacity: 0.6
  },
  catalogItem: {
    alignSelf: "stretch",
    paddingBottom: spacing.s3,
    justifyContent: "space-between",
    alignItems: "flex-start",
    display: "inline-flex",
    gap: "8px"
  },
  left: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 64,
    display: "flex",
  },
  right: {
    flex: "1 1 0",
    alignSelf: "stretch",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 12,
    display: "flex",
  },
  productInfo: {
    height: 80,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: "12px",
    display: "inline-flex",
  },
  displayName: {
    textAlign: "center",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    maxWidth: "240px",
    overflow: "hidden",
    color: "#242424",
    fontSize: "17px",
    fontFamily: "IBM Plex Sans",
    fontWeight: "600",
    lineHeight: "40px",
    letterSpacing: "0.38",
    wordWrap: "break-word",
  },
  caption: {
    textAlign: "center",
    color: "#616161",
    fontSize: "15px",
    fontFamily: "IBM Plex Sans",
    fontWeight: "400",
    lineHeight: "24px",
    letterSpacing: 0.38,
    wordWrap: "break-word",
  },
  price: {
    textAlign: "left",
    textWrap: "balance",
    color: colors.fg1,
    fontSize: "20px",
    fontFamily: "IBM Plex Sans",
    fontWeight: "600",
    lineHeight: "32px",
    letterSpacing: "0.38",
    wordWrap: "break-word",
  },
  btn: {
    background: { default: "linear-gradient(90deg, #2F72C0 0%, #B42FC0 100%)",
      ':disabled': "linear-gradient(90deg, #2F2F2f 0%, #B4B4B4 100%)"
    },
    backgroundClip: "text",
    color: "rgba(0,0,0,0)",
    
    border: "none"
  },
  addToCart: {
    fontSize: '24px'
  },
});
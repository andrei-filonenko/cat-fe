/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query CatalogQuery {\n    catalog {\n      amount\n      sku\n      displayName\n      selected\n      unitPrice\n    }\n  }\n": types.CatalogQueryDocument,
    "\n  mutation AddProducts($skus: [String!]!) {\n    addProducts(skus: $skus) {\n      sku\n      displayName\n    }\n  }\n": types.AddProductsDocument,
    "\n  mutation SetAmount($sku: String!, $newValue: Int!) {\n    setAmount(sku: $sku, newValue: $newValue) {\n      sku\n      displayName\n      amount\n    }\n  }\n": types.SetAmountDocument,
    "\n  mutation RemoveProducts($skus: [String]) {\n    removeProducts(skus: $skus) {\n      sku\n      displayName\n    }\n  }\n": types.RemoveProductsDocument,
    "\n  mutation UpdatePromcode($code: String!) {\n    updatePromcode(code: $code) {\n      promcode,\n      discountPercentage\n    }\n  }\n": types.UpdatePromcodeDocument,
    "\n  query CartQuery {\n    cart {\n      discountPercentage\n      products {\n        amount\n        displayName\n        sku\n        unitPrice\n      }\n    }\n    promcode\n  }\n": types.CartQueryDocument,
    "\n   mutation ClearCart {\n    clearCart {\n      sku\n    }\n   }\n": types.ClearCartDocument,
    "\n   mutation Checkout {\n    clearCart {\n      sku\n    }\n   }\n": types.CheckoutDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query CatalogQuery {\n    catalog {\n      amount\n      sku\n      displayName\n      selected\n      unitPrice\n    }\n  }\n"): (typeof documents)["\n  query CatalogQuery {\n    catalog {\n      amount\n      sku\n      displayName\n      selected\n      unitPrice\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddProducts($skus: [String!]!) {\n    addProducts(skus: $skus) {\n      sku\n      displayName\n    }\n  }\n"): (typeof documents)["\n  mutation AddProducts($skus: [String!]!) {\n    addProducts(skus: $skus) {\n      sku\n      displayName\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SetAmount($sku: String!, $newValue: Int!) {\n    setAmount(sku: $sku, newValue: $newValue) {\n      sku\n      displayName\n      amount\n    }\n  }\n"): (typeof documents)["\n  mutation SetAmount($sku: String!, $newValue: Int!) {\n    setAmount(sku: $sku, newValue: $newValue) {\n      sku\n      displayName\n      amount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation RemoveProducts($skus: [String]) {\n    removeProducts(skus: $skus) {\n      sku\n      displayName\n    }\n  }\n"): (typeof documents)["\n  mutation RemoveProducts($skus: [String]) {\n    removeProducts(skus: $skus) {\n      sku\n      displayName\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdatePromcode($code: String!) {\n    updatePromcode(code: $code) {\n      promcode,\n      discountPercentage\n    }\n  }\n"): (typeof documents)["\n  mutation UpdatePromcode($code: String!) {\n    updatePromcode(code: $code) {\n      promcode,\n      discountPercentage\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query CartQuery {\n    cart {\n      discountPercentage\n      products {\n        amount\n        displayName\n        sku\n        unitPrice\n      }\n    }\n    promcode\n  }\n"): (typeof documents)["\n  query CartQuery {\n    cart {\n      discountPercentage\n      products {\n        amount\n        displayName\n        sku\n        unitPrice\n      }\n    }\n    promcode\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n   mutation ClearCart {\n    clearCart {\n      sku\n    }\n   }\n"): (typeof documents)["\n   mutation ClearCart {\n    clearCart {\n      sku\n    }\n   }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n   mutation Checkout {\n    clearCart {\n      sku\n    }\n   }\n"): (typeof documents)["\n   mutation Checkout {\n    clearCart {\n      sku\n    }\n   }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
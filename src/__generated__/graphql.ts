/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Cart = {
  __typename?: 'Cart';
  discountPercentage: Scalars['Int']['output'];
  products: Array<Product>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addProducts: Array<Product>;
  checkout?: Maybe<Array<Maybe<Product>>>;
  clearCart?: Maybe<Array<Maybe<Product>>>;
  incrementAmount?: Maybe<Product>;
  removeProducts?: Maybe<Array<Maybe<Product>>>;
  setAmount?: Maybe<Product>;
  updatePromcode: PromcodeResponse;
};


export type MutationAddProductsArgs = {
  skus: Array<Scalars['String']['input']>;
};


export type MutationIncrementAmountArgs = {
  incrementBy?: InputMaybe<Scalars['Int']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRemoveProductsArgs = {
  skus?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationSetAmountArgs = {
  newValue: Scalars['Int']['input'];
  sku: Scalars['String']['input'];
};


export type MutationUpdatePromcodeArgs = {
  code: Scalars['String']['input'];
};

export enum PatternValidateDirectivePolicy {
  /** Field resolver is responsible to evaluate it using `validationErrors` injected in GraphQLResolverInfo */
  Resolver = 'RESOLVER',
  /** Field resolver is not called if occurs a validation error, it throws `UserInputError` */
  Throw = 'THROW'
}

export type Product = {
  __typename?: 'Product';
  amount: Scalars['Int']['output'];
  displayName: Scalars['String']['output'];
  selected: Scalars['Boolean']['output'];
  sku: Scalars['String']['output'];
  unitPrice: Scalars['Float']['output'];
};

export type PromcodeResponse = {
  __typename?: 'PromcodeResponse';
  discountPercentage: Scalars['Int']['output'];
  promcode: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  cart: Cart;
  catalog: Array<Product>;
  discountPercentage: Scalars['String']['output'];
  promcode?: Maybe<Scalars['String']['output']>;
};

export enum RangeValidateDirectivePolicy {
  /** Field resolver is responsible to evaluate it using `validationErrors` injected in GraphQLResolverInfo */
  Resolver = 'RESOLVER',
  /** Field resolver is not called if occurs a validation error, it throws `UserInputError` */
  Throw = 'THROW'
}

export enum StringLengthValidateDirectivePolicy {
  /** Field resolver is responsible to evaluate it using `validationErrors` injected in GraphQLResolverInfo */
  Resolver = 'RESOLVER',
  /** Field resolver is not called if occurs a validation error, it throws `UserInputError` */
  Throw = 'THROW'
}

/** type of the list entry given as `validationErrors` argument that is injected into every field resolver with validated arguments */
export type ValidatedInputError = {
  /** The actual error instance */
  error: ValidatedInputErrorInstance;
  /** The error/exception message that caused the validation error */
  message: Scalars['String']['input'];
  /** Path to the value that caused the validation error */
  path: Array<Scalars['String']['input']>;
};

/** The error/exception that caused the validation error */
export type ValidatedInputErrorInstance = {
  message: Scalars['String']['input'];
};

/** Output/return version of ValidatedInputError */
export type ValidatedInputErrorOutput = {
  __typename?: 'ValidatedInputErrorOutput';
  /** The error/exception message that caused the validation error */
  message: Scalars['String']['output'];
  /** Path to the value that caused the validation error */
  path: Array<Scalars['String']['output']>;
};

export type CatalogQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type CatalogQueryQuery = { __typename?: 'Query', catalog: Array<{ __typename?: 'Product', amount: number, sku: string, displayName: string, selected: boolean, unitPrice: number }> };

export type AddProductsMutationVariables = Exact<{
  skus: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type AddProductsMutation = { __typename?: 'Mutation', addProducts: Array<{ __typename?: 'Product', sku: string, displayName: string }> };

export type SetAmountMutationVariables = Exact<{
  sku: Scalars['String']['input'];
  newValue: Scalars['Int']['input'];
}>;


export type SetAmountMutation = { __typename?: 'Mutation', setAmount?: { __typename?: 'Product', sku: string, displayName: string, amount: number } | null };

export type RemoveProductsMutationVariables = Exact<{
  skus?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type RemoveProductsMutation = { __typename?: 'Mutation', removeProducts?: Array<{ __typename?: 'Product', sku: string, displayName: string } | null> | null };

export type UpdatePromcodeMutationVariables = Exact<{
  code: Scalars['String']['input'];
}>;


export type UpdatePromcodeMutation = { __typename?: 'Mutation', updatePromcode: { __typename?: 'PromcodeResponse', promcode: string, discountPercentage: number } };

export type CartQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type CartQueryQuery = { __typename?: 'Query', promcode?: string | null, cart: { __typename?: 'Cart', discountPercentage: number, products: Array<{ __typename?: 'Product', amount: number, displayName: string, sku: string, unitPrice: number }> } };

export type ClearCartMutationVariables = Exact<{ [key: string]: never; }>;


export type ClearCartMutation = { __typename?: 'Mutation', clearCart?: Array<{ __typename?: 'Product', sku: string } | null> | null };

export type CheckoutMutationVariables = Exact<{ [key: string]: never; }>;


export type CheckoutMutation = { __typename?: 'Mutation', clearCart?: Array<{ __typename?: 'Product', sku: string } | null> | null };


export const CatalogQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CatalogQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"catalog"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"selected"}},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}}]}}]}}]} as unknown as DocumentNode<CatalogQueryQuery, CatalogQueryQueryVariables>;
export const AddProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddProducts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skus"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addProducts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"skus"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skus"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}}]}}]}}]} as unknown as DocumentNode<AddProductsMutation, AddProductsMutationVariables>;
export const SetAmountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetAmount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sku"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newValue"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setAmount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sku"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sku"}}},{"kind":"Argument","name":{"kind":"Name","value":"newValue"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newValue"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]} as unknown as DocumentNode<SetAmountMutation, SetAmountMutationVariables>;
export const RemoveProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveProducts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skus"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeProducts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"skus"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skus"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}}]}}]}}]} as unknown as DocumentNode<RemoveProductsMutation, RemoveProductsMutationVariables>;
export const UpdatePromcodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePromcode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePromcode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"promcode"}},{"kind":"Field","name":{"kind":"Name","value":"discountPercentage"}}]}}]}}]} as unknown as DocumentNode<UpdatePromcodeMutation, UpdatePromcodeMutationVariables>;
export const CartQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CartQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"discountPercentage"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"promcode"}}]}}]} as unknown as DocumentNode<CartQueryQuery, CartQueryQueryVariables>;
export const ClearCartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ClearCart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clearCart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"}}]}}]}}]} as unknown as DocumentNode<ClearCartMutation, ClearCartMutationVariables>;
export const CheckoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Checkout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clearCart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"}}]}}]}}]} as unknown as DocumentNode<CheckoutMutation, CheckoutMutationVariables>;
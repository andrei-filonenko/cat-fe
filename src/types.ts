export type Product = {
    sku: string,
    displayName: string,
    unitPrice: number
}

export type CatalogProduct = Product & {
    selected?: boolean
}

export type CartItem = Product & {
    amount: number
}
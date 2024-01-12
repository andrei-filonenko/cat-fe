const usd = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

export function formatCurrency(price: number) {
    return usd.format(price);
}

export function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
    return value !== null && value !== undefined;
}

export function notNull<TValue>(value: TValue | null): value is TValue {
    return value !== null;
}



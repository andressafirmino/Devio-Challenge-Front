export default function CurrencyConversion(price: number) {
    const pricePtBr = (price / 100).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
    return pricePtBr;
}
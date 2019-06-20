export const FETCH_STOCK_PRICES = 'FETCH_STOCK_PRICES';

export const fetchStockPrices = company => ({
  type: FETCH_STOCK_PRICES,
  payload: { company }
});

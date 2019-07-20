import axios from 'axios';

export function getHistoricalPricesByCompnay(company) {
  const URL = 'https://financialmodelingprep.com/api/v3/historical-price-full/';
  const ticker = company.symbol;

  return new Promise((resolve, reject) => {
    console.log(`Fetch stock prices for ${ticker}`);
    axios
      .get(`${URL}${ticker}`)
      .then(function(response) {
        const companyData = {
          company: response.data.symbol,
          prices: response.data.historical
        };
        resolve({
          company: companyData.company,
          prices: companyData.prices
        });
      })
      .catch(function(error) {
        reject(error);
      });
  });
}

import axios from 'axios';
import Stocks from '../api/stocks/stocks';

export function FreeApiCompanyPriceRequest(url) {
  axios
    .get(url)
    .then(function(response) {
      // handle success
      let companyData = {
        company: response.data.symbol,
        prices: response.data.historical
      };
      //console.log(companyData);
      Stocks.insert({company:companyData.company, prices:companyData.prices});
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .finally(function() {
      //  console.log("success");
    });
}
const axios = require('axios');
const fs = require('fs');

// Get the top 100 companies based on market cap
const SYMBOLS_LIST_URL =
  'https://financialmodelingprep.com/api/v3/company/stock/list';
const ENTERPRISE_VALUE_LIST =
  'https://financialmodelingprep.com/api/v3/enterprise-value/';

(async () => {
  console.log('Getting the top 100 companies');
  try {
    const symbolsListRes = await axios.get(SYMBOLS_LIST_URL);
    let list = symbolsListRes.data.symbolsList.map(company => ({
      symbol: company.symbol,
      name: company.name
    }));
    let count = 0;
    const timeout = 1000;
    const getMarketCapPromises = [];
    for (const company of list) {
      const ticker = company.symbol;
      getMarketCapPromises.push(
        new Promise(resolve => {
          setTimeout(async () => {
            console.log(`Getting market cap info of ${ticker}`);
            const marketCap = await getMarketCap(ticker);
            resolve(marketCap);
          }, count * timeout);
        })
      );
      count += 1;
    }
    const data = await Promise.all(getMarketCapPromises);
    for (let i = 0; i < list.length; i++) {
      list[i].marketCap = data[i];
    }
    list.sort((a, b) => b.marketCap - a.marketCap);
    const top100 = list.slice(0, 100);
    fs.writeFileSync(
      './imports/startup/seeds/companies.json',
      JSON.stringify(top100),
      'utf8'
    );
    console.log('seeds/companies.json has been updated!');
  } catch (err) {
    console.log(err.message);
  }
})();

async function getMarketCap(ticker) {
  try {
    const res = await axios.get(`${ENTERPRISE_VALUE_LIST}${ticker}`);
    const enterpriseValues = res.data.enterpriseValues;
    return enterpriseValues[0]
      ? enterpriseValues[0]['Market Capitalization']
      : 0;
  } catch (err) {
    return -1;
  }
}

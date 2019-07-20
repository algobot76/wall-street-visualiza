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
    const list = symbolsListRes.data.symbolsList.map(company => ({
      symbol: company.symbol,
      name: company.name
    }));
    // TODO: Make parallel requests
    for (const company of list) {
      const ticker = company.symbol;
      const enterpriseValueRes = await axios.get(
        `${ENTERPRISE_VALUE_LIST}${ticker}`
      );
      const enterpriseValues = enterpriseValueRes.data.enterpriseValues;
      company.marketCap = enterpriseValues[0]
        ? enterpriseValues[0]['Market Capitalization']
        : 0;
      console.log(`Info of ${ticker}:`);
      console.log(company);
    }
    list.sort((a, b) => b.marketCap - a.marketCap);
    const top100 = list.slice(0, 100);
    fs.writeFileSync(
      './imports/startup/seeds/companies.json',
      JSON.stringify(top100),
      'utf8'
    );
  } catch (err) {
    console.log(err.message);
  }
})();

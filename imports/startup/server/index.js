import { Meteor } from 'meteor/meteor';
import './register-api';

import Companies from '../../api/companies/companies';
import Headlines from '../../api/headlines/headlines';
import Stocks from '../../api/stocks/stocks';
import News from '../../api/news/news';

import companies from '../seeds/companies';
import headlines from '../seeds/headlines';
import news from '../seeds/news';

import { getHistoricalPricesByCompnay } from '../../vendor/FinancialModelingPrep';

Meteor.startup(() => {
  News.remove({});

  news.forEach(newsEntry => {
    News.insert(newsEntry);
  });

  // We want to add a time interval between each request
  let count = 0;
  const timeout = 1000;

  Stocks.remove({});
  Companies.remove({});
  companies.forEach(company => {
    Companies.insert({ symbol: company.symbol, fullName: company.name });
    // Fetch stock prices for the company
    setTimeout(() => {
      getHistoricalPricesByCompnay(company)
        .then(res => Stocks.insert(res))
        .catch(err => console.log(err.message));
    }, count * timeout);
    count += 1;
  });

  Headlines.remove({});
  headlines.forEach(headline => {
    Headlines.insert({
      title: headline.title,
      description: headline.description,
      image: headline.image,
      url: headline.url
    });
  });
});

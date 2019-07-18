import { Meteor } from 'meteor/meteor';

import Companies from '../../api/companies/companies';
import Headlines from '../../api/headlines/headlines';
import Stocks from '../../api/stocks/stocks';
import News from '../../api/news/news';

import './register-api';
import companies from '../seeds/companies';
import headlines from '../seeds/headlines';
import news from '../seeds/news';
import stocks from '../seeds/stocks';
import { FreeApiCompanyPriceRequest } from '../../vendor/FreeStockRequestApi';

Meteor.startup(() => {
  let link = 'https://financialmodelingprep.com/api/v3/historical-price-full/';
  let urlArray = [];
  let count  = 0;
  let factor = 1000;
  Companies.remove({});
  companies.forEach(company => {
    Companies.insert({ symbol: company.symbol, fullName: company.name });
    let eachLink = (link + company.symbol).trim();
    urlArray.push(eachLink);
  });


  Stocks.remove({});

  urlArray.forEach(url => {


    setTimeout( () => {
      FreeApiCompanyPriceRequest(url);
    }, count * factor);
    count += 1;
  });
  /*
  stocks.forEach(stock => {
    Stocks.insert({ company: stock.company, prices: stock.prices });
  });
*/
  Headlines.remove({});
  headlines.forEach(headline => {
    Headlines.insert({
      title: headline.title,
      description: headline.description,
      image: headline.image,
      url: headline.url
    });
  });

  News.remove({});
  news.forEach(eachNew => {
    News.insert({ company: eachNew.company, articles: eachNew.articles });
  });
});

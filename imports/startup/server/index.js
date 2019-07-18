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
import { FreeApiNewsRequest } from '../../vendor/FreeNewsRequestApi';

Meteor.startup(() => {
  let link = 'https://financialmodelingprep.com/api/v3/historical-price-full/';
  let firstHalfNewsLink = "https://stocknewsapi.com/api/v1?tickers=";
  let secondHalfNewsLink = "&items=50&token=qi0odpgqlv9r3jolq1anyjsbdemifnjpdjfnxafn";
  let newsUrlArray = [];
  let urlArray = [];
  let count  = 0;
  let newsCount = 100;
  let factor = 1000;
  Companies.remove({});
  companies.forEach(company => {
    Companies.insert({ symbol: company.symbol, fullName: company.name });
    let eachLink = (link + company.symbol).trim();
    let eachNewsLink = (firstHalfNewsLink + company.symbol + secondHalfNewsLink);
   // newsUrlArray.push(eachNewsLink);
    urlArray.push(eachLink);
    FreeApiNewsRequest (eachNewsLink, company.symbol);
  });


  Stocks.remove({});

  urlArray.forEach(url => {
    setTimeout( () => {
      FreeApiCompanyPriceRequest(url);
    }, count * factor);
    count += 1;
  });
/*
  newsUrlArray.forEach(url => {
    setTimeout( () => {
      FreeApiNewsRequest(url);
    }, newsCount * factor);
    newsCount += 1;
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


  /*
  news.forEach(eachNew => {
    News.insert({ company: eachNew.company, articles: eachNew.articles });
  });
  */

});

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


Meteor.startup(() => {
  Companies.remove({});

  companies.forEach(company => {
    Companies.insert({ symbol: company.symbol , name: company.name});
  });


  Stocks.remove({});
  stocks.forEach(stock => {
    Stocks.insert({ company: stock.company, prices: stock.prices });
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

  News.remove({});
  news.forEach(eachNew => {
    News.insert({ company: eachNew.company, articles: eachNew.articles });
  });
});

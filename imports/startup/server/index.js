import { Meteor } from 'meteor/meteor';

import Companies from '../../api/companies/companies';
import Stocks from '../../api/stocks/stocks';
import News from '../../api/news/news';
import Headlines from "../../api/headlines/headlines";

import './register-api';
import companies from '../seeds/companies';
import headlines from '../seeds/headlines';
import news from '../seeds/news';
import stocks from '../seeds/stocks';


Meteor.startup(() => {
  Companies.remove({});
  companies.forEach(company => {
  Companies.insert({ symbol: company.symbol });
   
  });
  Stocks.remove({});
  stocks.forEach(stock => {
  Stocks.insert ({company: stock.company, prices: stock.prices});
  });

  Headlines.remove({});
  headlines.forEach( headline => {
  Headlines.insert({headline});
  });
  
   News.remove({});
  news.forEach( eachNew => {
  News.insert({company:eachNew.company, articles:eachNew.articles});
  });
  
});

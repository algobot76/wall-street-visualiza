import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import Companies from './companies';
import Stocks from './stocks';
import Headlines from './headlines';
import News from './news';

export const companiesGetAll = new ValidatedMethod({
  name: 'companies.getAll',
  validate: new SimpleSchema({}).validator(),
  run() {
    return Companies.find({}).fetch();
  }
});

export const newsGetAll = new ValidatedMethod ({
  name: 'news.getAll',
  validate: new SimpleSchema({}).validator(),
  run() {
    return News.find({}).fetch();
  }
});

export const headlineGetAll= new ValidatedMethod ({
  name: 'headline.getAll',
  validate: new SimpleSchema({}).validator(),
  run() {
    return Headlines.find({}).fetch();
  }
});

export const stocksGetAll = new ValidatedMethod ({
  name: 'stocks.getAll',
  validate: new SimpleSchema({}).validator(),
  run() {
    return Stocks.find({}).fetch();
  }
});

export const companiesDeleteAll = new ValidatedMethod({
  name:'companies.DeleteAll',
  validate: new SimpleSchema({}).validator(),
  run() {
    
  }
});
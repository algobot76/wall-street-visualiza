import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import Stocks from './stocks';

export const stocksGetAll = new ValidatedMethod({
  name: 'stocks.getAll',
  validate: new SimpleSchema({}).validator(),
  run() {
    return Stocks.find({}).fetch();
  }
});

export const stocksGetSpecificStockInfo = new ValidatedMethod({
  name: 'stocks.getSpecificStockInfo',
  validate: new SimpleSchema({
    company: { type: String }
  }).validator(),
  run(company) {
    return Stocks.findOne(company.toString());
  }
});

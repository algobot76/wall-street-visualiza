import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import News from './news';

export const newsGetBySymbol = new ValidatedMethod({
  name: 'news.getBySymbol',
  validate: new SimpleSchema({
    symbol: { type: String }
  }).validator(),
  run({ symbol }) {
    if (News.findOne({ company: symbol })) {
      return News.findOne(
        { company: symbol },
        { fields: { _id: 0, articles: 1 } }
      );
    } else {
      return [];
    }
  }
});

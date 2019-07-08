import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import News from './news';

export const newsGetAll = new ValidatedMethod({
  name: 'news.getAll',
  validate: new SimpleSchema({}).validator(),
  run() {
    return News.find({}).fetch();
  }
});

export const newsGetSpecificCompanyNews = name =>
  new ValidatedMethod({
    name: 'news.getSpecificNewInfo',
    validate: new SimpleSchema({
      name: { type: String }
    }).validator(),

    run() {
      return News.find({ company: name.toString() });
    }
  });

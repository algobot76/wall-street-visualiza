import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import Companies from './companies';

export const companiesGetAll = new ValidatedMethod({
  name: 'companies.getAll',
  validate: new SimpleSchema({}).validator(),
  run() {
    return Companies.find({}).fetch();
  }
});

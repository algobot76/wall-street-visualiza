import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import Headlines from './headlines';

export const headlinesGetAll = new ValidatedMethod({
  name: 'headlines.getAll',
  validate: new SimpleSchema({}).validator(),
  run() {
    return Headlines.find({}).fetch();
  }
});

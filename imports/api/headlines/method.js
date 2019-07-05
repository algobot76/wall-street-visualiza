import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import Headlines from './headlines/headlines';



export const headlineGetAll= new ValidatedMethod ({
    name: 'headline.getAll',
    validate: new SimpleSchema({}).validator(),
    run() {
      return Headlines.find({}).fetch();
    }
  });
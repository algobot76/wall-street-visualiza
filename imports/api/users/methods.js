import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

// TODO: Refactor this method
export const usersUpdateName = new ValidatedMethod({
  name: 'users.updateName',
  validate: new SimpleSchema({
    id: { type: String },
    name: { type: String }
  }).validator(),
  run({ id, name }) {
    console.log(name);
    Meteor.users.update({ _id: id }, { $set: { profile: { name } } });
  }
});

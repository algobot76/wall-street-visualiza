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
    Meteor.users.update({ _id: id }, { $set: { profile: { name } } });
  }
});

export const usersUpdateEmail = new ValidatedMethod({
  name: 'users.updateEmail',
  validate: new SimpleSchema({
    id: { type: String },
    email: { type: String }
  }).validator(),
  run({ id, email }) {
    Meteor.users.update({ _id: id }, { $set: { 'emails.0.address': email } });
  }
});

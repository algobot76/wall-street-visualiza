import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
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

// TODO: Refactor this method
export const usersUpdateEmail = new ValidatedMethod({
  name: 'users.updateEmail',
  validate: new SimpleSchema({
    id: { type: String },
    email: { type: String }
  }).validator(),
  run({ id, email }) {
    console.log(email);
    Meteor.users.update({ _id: id }, { $set: { 'emails.0.address': email } });
  }
});

export const usersUpdatePassword = new ValidatedMethod({
  name: 'users.updatePassword',
  validate: null,
  run({ id, password }) {
    if (Meteor.isServer) {
      Accounts.setPassword(id, password, { logout: false });
    }
  }
});

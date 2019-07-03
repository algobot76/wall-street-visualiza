import { Mongo } from 'meteor/mongo';

const Companies = new Mongo.Collection('companies');
Companies.deny({
  insert() {
    return true;
  },
  update() {
    return true;
  },
  finished() {
    return true;
  }
});

export default Companies;

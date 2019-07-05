import { Mongo } from 'meteor/mongo';

const Stocks = new Mongo.Collection('stocks');

export default Stocks;
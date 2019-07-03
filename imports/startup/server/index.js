import { Meteor } from 'meteor/meteor';
import Companies from '../../api/companies';

const symbols = [
  'BAC',
  'AAPL',
  'BNS',
  'FB',
  'TSLA',
  'TD',
  'SBUX',
  'SHOP',
  'RY',
  'NKE',
  'NTGR',
  'NFLX',
  'GOOG',
  'GS',
  'GM',
  'F',
  'DIS',
  'CM',
  'BMO',
  'BBY'
];

Meteor.startup(() => {
  symbols.forEach(symbol => {
    Companies.insert({ symbol });
  });
});

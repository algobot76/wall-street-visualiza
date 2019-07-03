import { Meteor } from 'meteor/meteor';
import Companies from '../../api/companies';

import companies from '../seeds/companies';

Meteor.startup(() => {
  companies.forEach(company => {
    Companies.insert({ symbol: company.sy });
  });
});

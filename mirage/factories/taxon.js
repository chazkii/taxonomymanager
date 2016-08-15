import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return faker.name.jobTitle();
  },
  description() {
    return faker.name.jobDescriptor();
  },
  parent() {
    return null;
  },
});

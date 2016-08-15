import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('taxon', 'taxonomy');

// Meet Ember Inspector's expectation of an export
export default {};

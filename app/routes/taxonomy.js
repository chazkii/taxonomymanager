import Ember from 'ember';

export default Ember.Route.extend({
  search: "",
  model() {
    return this.store.findAll('taxon');
  },
});

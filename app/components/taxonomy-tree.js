import Ember from 'ember';

export default Ember.Component.extend({
  filteredNodes: Ember.computed('nodes', 'search', function () {
    const s = this.get('search');
    return this.nodes.filter(function(n) {
      if (s === '') { return true; }
      return n.get('name').indexOf(s) !== -1;
    });
  })
});

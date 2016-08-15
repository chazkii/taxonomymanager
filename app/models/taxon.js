import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  children: DS.hasMany('taxons', { inverse: 'parent' }),
  parent: DS.belongsTo('taxon', { inverse: 'children' })
});

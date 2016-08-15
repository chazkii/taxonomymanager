export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  const aaChildren = server.createList('taxon', 3);
  const abChildren = server.createList('taxon', 3);
  const a = server.create('taxon');
  // const aa = server.create('taxon', { name: 'Parent', children: aaChildren, parent: a });
  const aa = server.create('taxon', { name: 'Parent' });
  aa.parent = a;
  aa.children = aaChildren;
  // const ab = server.create('taxon', { children: abChildren, parent: a });
  // a.children.push(aa);
  // a.children.push(ab);
}

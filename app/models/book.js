import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  summary: DS.attr(),
  image_url: DS.attr(),
  reviews: DS.hasMany('review', {async: true})
});

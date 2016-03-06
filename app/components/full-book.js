import Ember from 'ember';

export default Ember.Component.extend({
  sortProperties: ['rating:desc'],
  sortedReviews: Ember.computed.sort('book.reviews', 'sortProperties'),

  author: Ember.computed('author', function() {
    return this.get('book.first_name') + " " + this.get('book.last_name');
  }),

  actions: {
    saveReview(review, params) {
      this.sendAction('saveReview', review, params);
    },
  }
});

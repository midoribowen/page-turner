import Ember from 'ember';

export default Ember.Component.extend({
  sortProperties: ['rating:desc'],
  sortedReviews: Ember.computed.sort('book.reviews', 'sortProperties'),

  actions: {
    saveReview(review, params) {
      this.sendAction('saveReview', review, params);
    },
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  addReview: false,

  actions: {
    addReview() {
      this.set("addReview", true);
    },
  }
});

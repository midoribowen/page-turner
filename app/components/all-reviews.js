import Ember from 'ember';

export default Ember.Component.extend({
  addReview: false,

  actions: {
    addReview() {
      this.set("addReview", true);
    },

    newReview() {
      var params = {
        rating: this.get('rating'),
        name: this.get('name'),
        explanation: this.get('explanation'),
      };
      this.set("addReview", false);
      this.sendAction('newReview', params);
    }
  }
});

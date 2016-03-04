import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addBook() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        summary: this.get('summary'),
        image_url: this.get('image_url'),
      };
      this.sendAction('addBook', params);
    }
  }
});

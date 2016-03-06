import Ember from 'ember';

export function reviewRating(params) {
  var review = params[0].get('rating');

  if(review = 5) {
  return Ember.String.htmlSafe("{{paper-icon 'star'}}{{paper-icon 'star'}}{{paper-icon 'star'}}{{paper-icon 'star'}}{{paper-icon 'star'}}");
} else if(review = 4) {
    return Ember.String.htmlSafe("{{paper-icon 'star'}}{{paper-icon 'star'}}{{paper-icon 'star'}}{{paper-icon 'star'}}{{paper-icon 'star-border'}}");
  } else if(review = 3) {
      return Ember.String.htmlSafe("{{paper-icon 'star'}}{{paper-icon 'star'}}{{paper-icon 'star'}}{{paper-icon 'star-border'}}{{paper-icon 'star-border'}}");
  } else if(review = 2) {
      return Ember.String.htmlSafe("{{paper-icon 'star'}}{{paper-icon 'star'}}{{paper-icon 'star-border'}}{{paper-icon 'star-border'}}{{paper-icon 'star-border'}}");
  } else if(review = 1) {
      return Ember.String.htmlSafe("{{paper-icon 'star'}}{{paper-icon 'star-border'}}{{paper-icon 'star-border'}}{{paper-icon 'star-border'}}{{paper-icon 'star-border'}}");
  }
}

export default Ember.Helper.helper(reviewRating);

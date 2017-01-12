import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    // imageShow name must match the action reference in the hbs template file
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    }
  }
});

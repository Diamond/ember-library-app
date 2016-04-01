import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('invitation');
  },
  actions: {
    saveInvitation: function(model) {
      model.save().then(() => {
        model.set('response', `Thank you! We've just saved your email address with the following id: ${model.get('id')}`);
        model.set('email', '');
      });
    }
  }
});

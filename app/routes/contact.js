import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('contact');
  },
  actions: {
    submit: function(newContact) {
      newContact
        .save()
        .then(() => {
          newContact.set('response', `Thank you ${newContact.get('email')}! Your message has been sent!`);
          newContact.set('email', '');
          newContact.set('message', '');
      });
    }
  }
});

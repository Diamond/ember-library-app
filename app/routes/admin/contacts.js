import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('contact');
  },
  actions: {
    deleteContact(contact) {
      const confirmation = confirm("Do you really want to delete this contact?");
      if (confirmation) {
        contact.destroyRecord();
      }
    }
  }
});

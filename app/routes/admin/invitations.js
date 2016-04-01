import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('invitation');
  },
  actions: {
    deleteInvitation(invitation) {
      const confirmation = confirm("Do you really want to delete this invitation?");
      if (confirmation) {
        invitation.destroyRecord();
      }
    }
  }
});

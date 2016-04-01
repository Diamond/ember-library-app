import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  isValid: Ember.computed.match('email', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid')
});

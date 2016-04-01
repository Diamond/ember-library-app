import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  message: DS.attr('string'),
  response: null,
  isEmailValid: Ember.computed.match('email', /^.+@.+\..+$/),
  isTextMessageValid: Ember.computed('message', function () {
    const message = this.get('message');
    return message && message !== '' && message.length > 5;
  }),
  isValid: Ember.computed('email', 'message', function () {
    return this.get('isEmailValid') && this.get('isTextMessageValid');
  }),
  isInvalid: Ember.computed.not('isValid')
});

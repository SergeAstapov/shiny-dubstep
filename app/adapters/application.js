import Ember from 'ember';
import DS from "ember-data";

export default DS.RESTAdapter.extend({
    namespace: 'api',
    pathForType: function(type) {
        return Ember.String.dasherize(type);

        // switch (type) {
        //     case "paymentMethod" :
        //         return 'payment-methods';

        //     default:
        //         return Ember.String.dasherize(type);
        // }
    }
});

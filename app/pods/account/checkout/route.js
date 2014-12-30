import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        return {
            paymentMethods:    this.store.find('paymentMethod'),
            shippingAddresses: this.store.find('shippingAddress'),
            shippingOptions:   this.store.find('shippingOption'),
        };
    }
});

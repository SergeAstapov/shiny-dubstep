import Ember from 'ember';

export default Ember.ObjectController.extend({
    paymentMethod: null,
    shippingAddress: null,

    newPayMethod: {
        card: {
            cardNumber:     "",
            expirationDate: "",
            securityCode:   ""
        },
        billingAddress: {
            fname: "",
            lname: "",
            addr:  "",
            zip:   "",
            city:  "",
            state: "",
            phone: ""
        }
    },
    shippingAsBilling: true,
    newShippingAddress: {
        fname: "",
        lname: "",
        addr:  "",
        zip:   "",
        city:  "",
        state: "",
        phone: ""
    },

    useNewPayMethod: function() {
        return this.get('paymentMethod') === "new";
    }.property("paymentMethod"),

    useNewShippingAddress: function() {
        return this.get('shippingAddress') === "new";
    }.property("shippingAddress"),

    actions: {
        createOrder: function () {
            this.fillOrderObject()
                .then( this.fillPaymentMethod  .bind(this) )
                .then( this.fillShippingAddress.bind(this) )
                .then( this.saveOrder          .bind(this) )
                .then(function (order) {
                    console.log(order);

                    return order;
                })
                .then(function (order) {
                    this.transitionToRoute('orders.order', order.id);
                }.bind(this))
                .catch(function (error) {
                    console.log('Error: ', error);
                });
        }
    },

    fillOrderObject: function () {
        var self = this;

        return new Ember.RSVP.Promise(function(resolve) {
            var order = {};

            order.email = self.get('email');
            order.shippingAsBilling = self.get('shippingAsBilling');

            resolve(order);
        });
    },

    fillPaymentMethod: function (order) {
        var self = this;

        if ('new' !== self.get('paymentMethod')) {
            order.paymentMethod = self.get('paymentMethod');

            return order;
        }
        else {
            return new Ember.RSVP.Promise(function(resolve, reject) {
                var paymentMethod = self.get('newPayMethod');

                paymentMethod = self.store.createRecord('paymentMethod', paymentMethod);
                paymentMethod.save().then(function () {
                    order.paymentMethod = paymentMethod.id;

                    resolve(order);
                }, function () {
                    reject(Error("New payment method saving error"));
                });
            });
        }
    },

    fillShippingAddress: function (order) {
        var self = this;

        if (order.shippingAsBilling) {
            order.shippingAddress = null;

            return order;
        }
        else {
            return new Ember.RSVP.Promise(function(resolve, reject) {
                var shippingAddress = self.get('newShippingAddress');

                shippingAddress = self.store.createRecord('shippingAddress', shippingAddress);
                shippingAddress.save().then(function () {
                    console.log(shippingAddress);
                    order.shippingAddress = shippingAddress.id;

                    resolve(order);
                }, function () {
                    reject(Error("New shipping address saving error"));
                });
            });
        }
    },

    saveOrder: function (order) {
        var self = this;

        return new Ember.RSVP.Promise(function(resolve, reject) {
            order = self.store.createRecord('order', order);
            order.save().then(function () {
                resolve(order);
            }, function () {
                reject(Error("Order saving error"));
            });
        });
    }
});

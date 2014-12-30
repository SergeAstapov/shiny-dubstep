import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
    this.resource('account', { path: '/account' }, function() {
        this.route('checkout');
        this.resource('orders', function () {
            this.route('order', { path: '/:order_id' });
        });
    });
});

export default Router;

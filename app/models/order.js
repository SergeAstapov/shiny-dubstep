import DS from "ember-data";

export default DS.Model.extend({
    email: DS.attr('string'),
    paymentMethod: DS.attr('number'),
    shippingAsBilling: DS.attr('boolean', {defaultValue: true}),
});

import Ember from "ember";

export default Ember.View.extend({
    tagName: 'div',
    classNames: ['options-list--item'],
    classNameBindings: [
        'isNew:options-list--item--new',
        'isSelected:selected',
    ],


    value: null,


    isNew: function () {
        return this.value === "new";
    }.property('controller.shippingOption'),

    isSelected: function () {
        return this.value === this.get('controller').get("shippingOption");
    }.property('controller.shippingOption'),

    click: function () {
        this.get('controller').set("shippingOption", this.value);
    }
});

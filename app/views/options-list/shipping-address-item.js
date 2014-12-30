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
    }.property('controller.shippingAddress'),

    isSelected: function () {
        return this.value === this.get('controller').get("shippingAddress");
    }.property('controller.shippingAddress'),

    click: function () {
        this.get('controller').set("shippingAddress", this.value);
        console.log(
            "shippingAddress =",
            this.get('controller').get("shippingAddress")
        );
    }
});

import Ember from "ember";

export default Ember.View.extend({
    tagName: 'div',
    classNames: ['options-list--item'],
    classNameBindings: [
        'isNew:options-list--item--new',
        'isSelected:selected',
    ],
    attributeBindings: ['value:data-value'],


    value: null,
    modelProperty: function () {
        return this.get("parentView.modelProperty");
    },


    isNew: function () {
        return this.value === "new";
    }.property('dataId'),

    isSelected: function () {
        console.log(
            this.value,
            this.get('controller').get( this.modelProperty() ),
            this.value === this.get('controller').get( this.modelProperty() )
        );

        return this.value === this.get('controller').get( this.modelProperty() );
    }.observes('controller.payMethod'),

    click: function () {
        this.get('controller').set(
            this.modelProperty(),
            this.value
        );
        console.log(111, this.get('controller').get( this.modelProperty() ));
    }
});

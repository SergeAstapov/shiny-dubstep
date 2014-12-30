import DS from "ember-data";

export default DS.Model.extend({
    name:    DS.attr('string'),
    fname:   DS.attr('string'),
    lname:   DS.attr('string'),
    addr:    DS.attr('string'),
    zip:     DS.attr('string'),
    city:    DS.attr('string'),
    state:   DS.attr('string'),
    country: DS.attr('string'),
    phone:   DS.attr('string')
});

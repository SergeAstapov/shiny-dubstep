import Ember from 'ember';

export function debug(optionalValue) {
  console.log("Current Context");
  console.log("====================");
  console.log(this);
 
  if (optionalValue) {
    console.log("Value");
    console.log("====================");
    console.log(optionalValue);
  }
}

export default Ember.Handlebars.makeBoundHelper(debug);

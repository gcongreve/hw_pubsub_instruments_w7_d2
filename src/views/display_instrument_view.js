const PubSub = require('../helpers/pub_sub.js')


const DisplayInstumentView = function () {

};

DisplayInstumentView.prototype.bindEvents = function () {
  PubSub.subscribe("InstrumentFamilies:selected-instrument", (evt) => {
    const instrument = evt.detail;
    console.log("display:", instrument);
  })
};

module.exports = DisplayInstumentView;

const PubSub = require('../helpers/pub_sub.js')


const SelectInstumentView = function () {

};

const dropDownView = document.querySelector('select#instrument-families')


SelectInstumentView.prototype.bindEvents = function () {
  PubSub.subscribe("InstrumentFamilies:all-instruments", (evt) => {
    const allInstruments = evt.detail;
    console.log("all instros:", allInstruments)
    this.createDropDown(allInstruments)
  })
};


SelectInstumentView.prototype.createDropDown = function (instrumentData) {
  instrumentData.forEach((instrument, index) => {
    const dropDownView = document.querySelector('select#instrument-families');
    const option = document.createElement('option');
    option.textContent = instrument.name;
    option.value = index;
    dropDownView.appendChild(option)
  })
};

module.exports = SelectInstumentView;

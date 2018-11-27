const PubSub = require('../helpers/pub_sub.js')


const SelectInstumentView = function () {

};




SelectInstumentView.prototype.bindEvents = function () {
  const dropDownView = document.querySelector('select#instrument-families')

  PubSub.subscribe("InstrumentFamilies:all-instruments", (instrumentData) => {
    const allInstruments = instrumentData.detail;
    this.createDropDown(allInstruments)
  });

   dropDownView.addEventListener('change', (event) => {
    const instrumentIndex = event.target.value;
    PubSub.publish('SelectInstumentView:instrument-index', instrumentIndex);
    console.log(instrumentIndex);
  });


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

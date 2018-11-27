const PubSub = require('../helpers/pub_sub.js')


const SelectInstumentView = function (element) {
  this.element = element;
};




SelectInstumentView.prototype.bindEvents = function () {

  PubSub.subscribe("InstrumentFamilies:all-instruments", (instrumentData) => {
    const allInstruments = instrumentData.detail;
    this.createDropDown(allInstruments)
  });

   this.element.addEventListener('change', (event) => {
    const instrumentIndex = event.target.value;
    PubSub.publish('SelectInstumentView:instrument-index', instrumentIndex);
    console.log('instrument-index', instrumentIndex);
  });


};


SelectInstumentView.prototype.createDropDown = function (instrumentData) {
  instrumentData.forEach((instrument, index) => {
    const option = document.createElement('option');
    option.textContent = instrument.name;
    option.value = index;
    this.element.appendChild(option)
  })
};

module.exports = SelectInstumentView;

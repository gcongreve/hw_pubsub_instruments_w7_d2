const PubSub = require('../helpers/pub_sub.js')


const DisplayInstumentView = function () {

};

DisplayInstumentView.prototype.bindEvents = function () {
  PubSub.subscribe("InstrumentFamilies:selected-instrument", (evt) => {
    const instrument = evt.detail;
    console.log("display:", instrument);
    this.displayInstument(instrument);
  })
};

DisplayInstumentView.prototype.displayInstument = function (instrument) {
  const instrumentWindow = document.querySelector('#instrument-display');
  const instrumentName = document.createElement('h2');
  instrumentName.textContent = instrument.name;
  instrumentWindow.appendChild(instrumentName)
};

module.exports = DisplayInstumentView;

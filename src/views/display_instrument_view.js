const PubSub = require('../helpers/pub_sub.js')


const DisplayInstumentView = function (container) {
  this.container = container;
};

DisplayInstumentView.prototype.bindEvents = function () {
  PubSub.subscribe("InstrumentFamilies:selected-instrument", (evt) => {
    const instrument = evt.detail;
    console.log("display:", instrument);
    this.displayInstument(instrument);
  })
};

DisplayInstumentView.prototype.displayInstument = function (instrument) {
  this.container.innerHTML = '';
  const instrumentName = document.createElement('h2');
  instrumentName.textContent = instrument.name;
  this.container.appendChild(instrumentName)
  const instrumentContent = document.createElement('p');
  instrumentContent.textContent = instrument.description;
  this.container.appendChild(instrumentContent)
  const listHeading = document.createElement('h4');
  
  listHeading.textContent = 'Instruments include:';
  this.container.appendChild(listHeading)

  const instrumentList = instrument.instruments;
  instrumentList.forEach((instrument) => {
    let instItem = document.createElement('li');
    instItem.textContent = instrument;
    this.container.appendChild(instItem)
  })


};

module.exports = DisplayInstumentView;

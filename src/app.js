const DisplayInstumentView = require('./views/display_instrument_view.js')
const SelectInstumentView = require('./views/select_instrument_view.js')
const InstrumentFamilies = require('./models/instrument_families.js')


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const dropDownView = document.querySelector('select#instrument-families')
  const selectInstumentView = new SelectInstumentView(dropDownView)
  selectInstumentView.bindEvents();

  const instrumentFamilies = new InstrumentFamilies()
  instrumentFamilies.bindEvents();

  const instrumentWindow = document.querySelector('#instrument-display');
  const displayInstumentView = new DisplayInstumentView(instrumentWindow);
  displayInstumentView.bindEvents();


});

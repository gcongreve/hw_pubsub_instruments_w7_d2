const DisplayInstumentView = require('./views/display_instrument_view.js')
const SelectInstumentView = require('./views/select_instrument_view.js')
const InstrumentFamilies = require('./models/instrument_families.js')


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');


  const selectInstumentView = new SelectInstumentView()
  selectInstumentView.bindEvents();

  const instrumentFamilies = new InstrumentFamilies()
  instrumentFamilies.bindEvents();

  // const displayInstumentView = new DisplayInstumentView();
  // displayInstumentView.bindEvents();


});

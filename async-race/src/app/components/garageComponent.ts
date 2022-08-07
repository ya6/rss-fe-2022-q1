const garage = (() => {
  const garageEl = document.createElement('div');
  garageEl.className = 'garage';
  const content = `
  <div class="container">
  <div class ="controls-container">

  <div>
  <div>
  <input type="text"  name="">
  <input type="color" class ="pick-color" name="">
  <button class="fill-button" data-button="crete">Crete</button>
  </div>
  <div>
  <input type="text" name="">
  <input type="color" class ="pick-color"  value="#ffffff"name="">
  <button class="fill-button" data-button="update">Update</button>
  </div> 
  </div>
  <div>
    <button class="fill-button" data-button="generate">Generate Cars Set</button>
   </div>
   <div>
        <button class="fill-button" data-button="race">Race</button>
        <button class="fill-button" data-button="reset">Reset</button>
  </div> 
  </div>
  <div class="tracks-container"></div>
  </div>  
`;
  garageEl.insertAdjacentHTML('beforeend', content);

  return garageEl;
})();

export default garage;

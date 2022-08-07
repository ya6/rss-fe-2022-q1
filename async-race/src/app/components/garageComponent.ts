import { CarType } from '../types';

const garage = (cars: Array<CarType>) => {
  const garageEl = document.createElement('div');
  garageEl.className = 'garage';
  const content = `
  <div class="container">
    <div class ="controls-container">
      <div>
      <div class="cars-count">Garage ( ${cars.length} cars )</div>
      </div>
      <div>
        <div>
        <form>
          <input type="text" name="" data-create="name" required>
          <input type="color" class ="pick-color" data-create="color" style=" text-align: top">
          <button type="submit" class="fill-button" data-button="control create">Crete</button>
          </form>
          </div>
        <div>
        <form>
          <input type="text" name=""  data-update="name" required>
          <input type="color" class ="pick-color" data-update="color"  value="#ffffff"name="">
          <button type="submit" class="fill-button" data-button="control update">Update</button>
        </form>
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
};

export default garage;

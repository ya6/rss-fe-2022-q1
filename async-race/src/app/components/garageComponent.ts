import { PageDataType } from '../types';

const garage = (pageData: PageDataType) => {
  const {
    firstPage, currentPage, lastPage, cars,
  } = pageData;
  const garageEl = document.createElement('div');
  garageEl.className = 'garage';
  const content = `
  <div class="container">
    <div class ="controls-container">
      <div>
        <div class="cars-count">Garage ( ${cars} cars )</div>
        <div class="cars-count">
        <button type="button"  data-button="pageControl prev">${firstPage} < </button>
        <button type="button"  data-button="pageControl current" disabled> ${currentPage} </button>
        <button type="button"  data-button="pageControl next"> > ${lastPage} </button>
        </div>
      </div>
      
      <div>
        <div>
        <form>
          <input type="text" name="" data-create="name" required>
          <input type="color" class ="pick-color" data-create="color">
          <button type="button" class="fill-button" data-button="control create">Crete</button>
          </form>
          </div>
        <div>
        <form>
          <input type="text" name=""  data-update="name" required>
          <input type="hidden" name=""  data-update-id="">
          <input type="color" class ="pick-color" data-update="color">
          <button type="button" class="fill-button" data-button="control update">Update</button>
        </form>
          </div> 
      </div>
      <div>
        <button class="fill-button" data-button="control generate">Generate Cars Set</button>
      </div>
      <div>
        <button class="fill-button" data-button="race race">Race</button>
        <button class="fill-button" data-button="race reset">Reset</button>
      </div> 
    </div>
      <div class="tracks-container"></div>
  </div>  
`;
  garageEl.insertAdjacentHTML('beforeend', content);

  return garageEl;
};

export default garage;

const appComponent = (() => {
  const appEl = document.createElement('div');
  appEl.className = 'app';
  const content = `
  <div class="neon-button-container">
    <button class="neon-button" data-button="route garage">Garage</button>
    <button class="neon-button" data-button="route top">Top scores</button>
  </div>
  <div class="container">
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
      
  <div class="page-container">
  </div>
  `;
  appEl.insertAdjacentHTML('beforeend', content);

  return appEl;
})();

export default appComponent;

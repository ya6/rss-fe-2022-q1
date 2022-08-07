const appComponent = (() => {
  const appEl = document.createElement('div');
  appEl.className = 'app';
  const content = `
  <div class="neon-button-container">
    <button class="neon-button" data-button="route garage">Garage</button>
    <button class="neon-button" data-button="route top">Top scores</button>
  </div>
 
      
  <div class="page-container">
  </div>
  `;
  appEl.insertAdjacentHTML('beforeend', content);

  return appEl;
})();

export default appComponent;

const popupComp = (name: string, time: number) => {
  const popupEl = document.createElement('div');
  popupEl.className = 'popup';

  const content = `
  <div> Winner: ${name}, time: ${time}s </div>
    `;
  popupEl.insertAdjacentHTML('beforeend', content);
  return popupEl;
};
export default popupComp;

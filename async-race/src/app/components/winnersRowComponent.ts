import { WinnersType } from '../types';

const winnersRowComp = (winner: WinnersType) => {
  const { id, wins, time } = winner;
  const rowEl = document.createElement('div');
  rowEl.className = 'table-row';
  const content = `
<div class="table-row">
    <div class="table-item">${id}</div>
    <div class="table-item">Car</div>
    <div class="table-item">Name</div>
    <div class="table-item">${wins}</div>
    <div class="table-item">${time}</div>
</div>
    `;
  rowEl.insertAdjacentHTML('beforeend', content);
  return rowEl;
};

export default winnersRowComp;

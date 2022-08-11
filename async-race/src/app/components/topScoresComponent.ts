const topScores = () => {
  const topScoresEl = document.createElement('div');
  topScoresEl.className = 'top-scores';
  const content = `
  <div class="container">
  <div>
  <div class="cars-count">Winner ( ??? cars )</div>
        <div class="cars-count">
          <button type="button"  data-button="pageControl prev">${1} < </button>
          <button type="button"  data-button="pageControl current" disabled> ${1} </button>
          <button type="button"  data-button="pageControl next"> > ${1} </button>
        </div>

        <div class="table-head">
          <div class="table-item">№</div>
          <div class="table-item">Car</div>
          <div class="table-item">Name</div>
          <div class="table-item">Wins</div>
          <div class="table-item">Best time</div>
        </div>

      </div>
  </div>
  `;
  topScoresEl.insertAdjacentHTML('beforeend', content);
  return topScoresEl;
};

export default topScores;

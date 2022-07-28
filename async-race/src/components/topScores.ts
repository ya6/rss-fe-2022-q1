const topScores = (() => {
  const topScoresEl = document.createElement('div');
  topScoresEl.className = 'top-scores';
  topScoresEl.textContent = 'top-scores';
  return topScoresEl;
})();

export default topScores;

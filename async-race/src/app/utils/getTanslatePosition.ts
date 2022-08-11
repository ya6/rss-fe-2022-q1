const getTranslatePosition = (element: HTMLElement) => {
  const style = window.getComputedStyle(element);
  // eslint-disable-next-line no-undef
  const matrix = new WebKitCSSMatrix(style.transform);
  return matrix.m41;
};
export default getTranslatePosition;

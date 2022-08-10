import config from '../config';

const getCurrentPageCarsID = (page: number) => {
  const firstCarNumber = (page - 1) * config.tracks;
  const lastCarNumber = firstCarNumber + config.tracks;
  // eslint-disable-next-line no-array-constructor
  const all = new Array();

  return { firstCarNumber, lastCarNumber, all };
};
export default getCurrentPageCarsID;

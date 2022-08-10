import config from '../config';

const getCurrentPageCarsID = (page: number) => {
  const firstCarNumber = (page - 1) * config.tracks;
  const lastCarNumber = firstCarNumber + config.tracks;
  return { firstCarNumber, lastCarNumber };
};
export default getCurrentPageCarsID;

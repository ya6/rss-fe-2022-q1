import DB from './DB';

console.log('index.ts');

const testLoad = async () => {
  const data = await DB.getAll();
  console.log(data.default);
  const product = await DB.getByID(1);
  console.log(product);
};
testLoad();
// form cards
// draw view

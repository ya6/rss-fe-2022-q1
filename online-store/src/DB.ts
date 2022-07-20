export default class DB {
  static async getAll() {
    // eslint-disable-next-line import/extensions
    const data = await import('../dist/data.json');
    return data;
  }
}

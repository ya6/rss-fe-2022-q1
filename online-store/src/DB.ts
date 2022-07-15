export default class DB {
  static async getAll() {
    // eslint-disable-next-line import/extensions
    const data = await import('../dist/data.json');
    return data;
  }

  static async getByID(id: number) {
    const data = await this.getAll();
    return data.default.find((el) => el.id === id);
  }
}

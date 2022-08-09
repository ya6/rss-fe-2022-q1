export default class Storage {
  static saveToStorage(name: string, data:{}) {
    localStorage.setItem(name, JSON.stringify(data));
  }

  static loadFromStorage(name: string) {
    const itemStr = localStorage.getItem(name);
    if (itemStr === null) return null;
    return JSON.parse(itemStr);
  }
}

export default class Storage {
  static saveToSession(name: string, data:{}) {
    sessionStorage.setItem(name, JSON.stringify(data));
  }

  static loadFromSession(name: string) {
    const itemStr = sessionStorage.getItem(name);
    let item = null;
    if (itemStr === null) { item = {}; } else { item = JSON.parse(itemStr); }
    return item;
  }
}

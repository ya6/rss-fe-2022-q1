export default class Storage {
  static saveToStorage(name: string, data:{}) {
    localStorage.setItem(name, JSON.stringify(data));
  }

  static loadFromStorage(name: string) {
    const itemStr = localStorage.getItem(name);
    let item = null;
    if (itemStr === null) { item = {}; } else { item = JSON.parse(itemStr); }
    return item;
  }

  static saveToSession(name: string, data:{}) {
    sessionStorage.setItem(name, JSON.stringify(data));
  }

  static loadFromSession(name: string) {
    const itemStr = sessionStorage.getItem(name);
    let item = null;
    if (itemStr === null) { item = {}; } else { item = JSON.parse(itemStr); }
    return item;
  }

  static clearAll() {
    const clearButton = document.querySelector('.clear-all');
    if (clearButton !== null) {
      localStorage.clear();
    }
  }
}

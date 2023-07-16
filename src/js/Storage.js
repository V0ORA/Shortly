// Store and retrieve links from session storage
export class SessionStorageHandler {
  static getItem(key) {
    const value = sessionStorage.getItem(key);
    return JSON.parse(value);
  }

  static setItem(key, value) {
    const serializedValue = JSON.stringify(value);
    sessionStorage.setItem(key, serializedValue);
  }

  static clearAll() {
    sessionStorage.clear();
  }
}

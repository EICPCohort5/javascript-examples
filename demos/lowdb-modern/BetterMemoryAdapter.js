export default class BetterMemoryAdapter {
  #data = null;

  constructor(data) {
    this.#data = data;
  }

  read() {
    return this.#data;
  }

  write(obj) {
    this.#data = obj;
    return true;
  }
}

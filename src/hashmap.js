export default class HashMap {
  constructor() {
    this.buckets = new Array(16);
  }

  /**
   * Generates a hashcode for the given key
   * @param {String} key
   */
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode =
        primeNumber * (hashCode % this.buckets.length) + key.charCodeAt(i);
    }

    return hashCode % this.buckets.length;
  }
}

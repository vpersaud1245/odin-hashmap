import LinkedList from "./linkedlist";

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
    for (let i = 0; i < key.length; i += 1) {
      hashCode =
        primeNumber * (hashCode % this.buckets.length) + key.charCodeAt(i);
    }

    return hashCode % this.buckets.length;
  }

  set(key, value) {
    const bucketIndex = this.hash(key);
    if (!this.buckets[bucketIndex]) {
      this.buckets[bucketIndex] = new LinkedList();
      this.buckets[bucketIndex].append({ key, value });
      return;
    }
    const bucketLinkedList = this.buckets[bucketIndex];
    const listSize = bucketLinkedList.size();
    let currentNode = bucketLinkedList.headNode;

    for (let i = 0; i < listSize; i += 1) {
      if (currentNode.value.key === key) {
        currentNode.value.value = value;
        return;
      }
      currentNode = currentNode.link;
    }

    bucketLinkedList.append({ key, value });
  }

  get(key) {
    const bucketIndex = this.hash(key);
    const bucketLinkedList = this.buckets[bucketIndex];
    if (bucketLinkedList === undefined) {
      return null;
    }
    const listSize = bucketLinkedList.size();
    let currentNode = bucketLinkedList.headNode;

    // Iterate thorough list and return the node value if key is found
    for (let i = 0; i < listSize; i += 1) {
      if (currentNode.value.key === key) {
        return currentNode.value.value;
      }
      currentNode = currentNode.link;
    }
    return null;
  }

  has(key) {
    const bucketIndex = this.hash(key);
    const bucketLinkedList = this.buckets[bucketIndex];
    if (bucketLinkedList === undefined) {
      return false;
    }
    const listSize = bucketLinkedList.size();
    let currentNode = bucketLinkedList.headNode;

    for (let i = 0; i < listSize; i += 1) {
      if (currentNode.value.key === key) {
        return true;
      }
      currentNode = currentNode.link;
    }
    return false;
  }
}

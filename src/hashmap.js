import LinkedList from "./linkedlist";

export default class HashMap {
  constructor() {
    this.capacity = 16;
    this.buckets = Array.from(new Array(this.capacity), () => new LinkedList());
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
    // Check if index is in range
    if (this.buckets[bucketIndex].size() === 0) {
      this.buckets[bucketIndex].append({ key, value });
    } else {
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
  }

  get(key) {
    const bucketIndex = this.hash(key);
    // Check if index is in range
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
    // Check if index is in range
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

  remove(key) {
    const isInHashMap = this.has(key);
    if (isInHashMap) {
      const bucketIndex = this.hash(key);
      // Check if index is in range
      const bucketLinkedList = this.buckets[bucketIndex];
      let currentNode = bucketLinkedList.headNode;
      let previousNode = null;

      while (currentNode) {
        if (currentNode.value.key === key) {
          if (previousNode === null) {
            // If the node to be removed is the head node
            bucketLinkedList.headNode = currentNode.link;
          } else {
            // If the node to be removed is not the head node
            previousNode.link = currentNode.link;
          }
          if (bucketLinkedList.headNode === null) {
            this.buckets[bucketIndex] = undefined;
          }
          return true;
        }

        previousNode = currentNode;
        currentNode = currentNode.link;
      }
    }
    return false;
  }

  length() {
    let length = 0;
    this.buckets.forEach((bucket) => {
      if (bucket) {
        length += bucket.size();
      }
    });
    return length;
  }

  clear() {
    this.buckets = new Array(this.capacity).fill(new LinkedList());
  }

  keys() {
    const keys = [];
    this.buckets.forEach((bucket) => {
      if (bucket.headNode === null) {
        return;
      }
      let currentNode = bucket.headNode;
      keys.push(bucket.headNode.value.key);
      while (currentNode.link != null) {
        currentNode = currentNode.link;
        keys.push(currentNode.value.key);
      }
    });
    return keys;
  }

  toString() {
    let hashmapString = "";
    for (let i = 0; i < this.capacity; i += 1) {
      if (this.buckets[i].headNode === null) {
        hashmapString = hashmapString.concat(`${i}:null  `);
      } else {
        let currentNode = this.buckets[i].headNode;
        let nodeString = `${i}: (${currentNode.value.key}, ${currentNode.value.value}) ->`;
        while (currentNode.link != null) {
          currentNode = currentNode.link;
          nodeString = nodeString.concat(
            " ",
            `(${currentNode.value.key}, ${currentNode.value.value}) ->`,
          );
        }
        nodeString = nodeString.concat(" ", "null  ");
        hashmapString = hashmapString.concat(nodeString);
      }
    }
    console.log(hashmapString);
  }
}

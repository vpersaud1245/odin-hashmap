import LinkedList from "./linkedlist";

export default class HashMap {
  constructor() {
    this.capacity = 16;
    this.size = 0;
    this.loadFactor = 0.75;
    this.buckets = Array.from(new Array(this.capacity), () => new LinkedList());
  }

  #checkIndexRange(index) {
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
  }

  /**
   * Generates a hashcode for the given key
   * https://cp-algorithms.com/string/string-hashing.html
   * @param {String} key
   */
  #hash(key) {
    const PRIME = 131;
    const MOD_NUMBER = 28657;

    let primePower = 1;
    let hashCode = 0;
    for (let i = 0; i < key.length; i += 1) {
      const charCode = key[i].charCodeAt();
      hashCode = (hashCode + charCode * primePower) % MOD_NUMBER;
      primePower = (primePower * PRIME) % MOD_NUMBER;
    }

    return hashCode % this.capacity;
  }

  #optimizeArraySize() {
    if (this.size / this.capacity >= 0.75) {
      this.capacity *= 2;
      const newBucketArray = Array.from(
        new Array(this.capacity),
        () => new LinkedList(),
      );
      this.size = 0;

      for (let i = 0; i < this.buckets.length; i += 1) {
        if (this.buckets[i].headNode !== null) {
          let currentNode = this.buckets[i].headNode;

          while (currentNode !== null) {
            const newHashIndex = this.#hash(currentNode.key);

            newBucketArray[newHashIndex].append(
              currentNode.key,
              currentNode.value,
            );

            this.size += 1;

            currentNode = currentNode.link;
          }
        }
      }

      this.buckets = newBucketArray;
    }
  }

  set(key, value) {
    const bucketIndex = this.#hash(key);
    this.#checkIndexRange(bucketIndex);
    this.buckets[bucketIndex].append(key, value);
    this.size += 1;
    this.#optimizeArraySize();
  }

  get(key) {
    const bucketIndex = this.#hash(key);
    this.#checkIndexRange(bucketIndex);
    const bucketLinkedList = this.buckets[bucketIndex];
    return bucketLinkedList.at(bucketLinkedList.find(key)).value || null;
  }

  has(key) {
    const bucketIndex = this.#hash(key);
    // Check if index is in range
    const bucketLinkedList = this.buckets[bucketIndex];
    if (bucketLinkedList === undefined) {
      return false;
    }
    const listSize = bucketLinkedList.size();
    let currentNode = bucketLinkedList.headNode;

    for (let i = 0; i < listSize; i += 1) {
      if (currentNode.key === key) {
        return true;
      }
      currentNode = currentNode.link;
    }
    return false;
  }

  remove(key) {
    const isInHashMap = this.has(key);
    if (isInHashMap) {
      const bucketIndex = this.#hash(key);
      // Check if index is in range
      const bucketLinkedList = this.buckets[bucketIndex];
      let currentNode = bucketLinkedList.headNode;
      let previousNode = null;

      while (currentNode) {
        if (currentNode.key === key) {
          if (previousNode === null) {
            // If the node to be removed is the head node
            bucketLinkedList.headNode = currentNode.link;
          } else {
            // If the node to be removed is not the head node
            previousNode.link = currentNode.link;
          }

          this.size -= 1;
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
    this.buckets = Array.from(new Array(this.capacity), () => new LinkedList());
    this.size = 0;
  }

  keys() {
    const keys = [];
    this.buckets.forEach((bucket) => {
      if (bucket.headNode === null) {
        return;
      }
      let currentNode = bucket.headNode;
      keys.push(bucket.headNode.key);
      while (currentNode.link != null) {
        currentNode = currentNode.link;
        keys.push(currentNode.key);
      }
    });
    return keys;
  }

  values() {
    const values = [];
    this.buckets.forEach((bucket) => {
      if (bucket.headNode === null) {
        return;
      }
      let currentNode = bucket.headNode;
      values.push(bucket.headNode.value);
      while (currentNode.link != null) {
        currentNode = currentNode.link;
        values.push(currentNode.value);
      }
    });
    return values;
  }

  entries() {
    const entries = [];
    this.buckets.forEach((bucket) => {
      if (bucket.headNode === null) {
        return;
      }
      let currentNode = bucket.headNode;
      entries.push([bucket.headNode.key, bucket.headNode.value]);
      while (currentNode.link != null) {
        currentNode = currentNode.link;
        entries.push([currentNode.key, bucket.headNode.value]);
      }
    });
    return entries;
  }

  toString() {
    let hashmapString = "";
    for (let i = 0; i < this.buckets.length; i += 1) {
      if (this.buckets[i].headNode === null) {
        if (i < 10) {
          hashmapString = hashmapString.concat(`${i}:  null\n`);
        } else {
          hashmapString = hashmapString.concat(`${i}: null\n`);
        }
      } else {
        let currentNode = this.buckets[i].headNode;
        let nodeString = "";
        if (i < 10) {
          nodeString = `${i}:  (${currentNode.key}, ${currentNode.value}) -> `;
        } else {
          nodeString = `${i}: (${currentNode.key}, ${currentNode.value}) -> `;
        }
        while (currentNode.link != null) {
          currentNode = currentNode.link;
          nodeString = nodeString.concat(
            "",
            `(${currentNode.key}, ${currentNode.value}) -> `,
          );
        }
        nodeString = nodeString.concat("", "null\n");
        hashmapString = hashmapString.concat(nodeString);
      }
    }
    console.log(hashmapString);
  }
}

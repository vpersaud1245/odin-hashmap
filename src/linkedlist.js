import Node from "./node";

export default class LinkedList {
  constructor() {
    this.headNode = null;
  }

  /**
   * Adds a new node containing value to the end of the list
   * @param {*} value
   */
  append(key, value) {
    // Create Node to be appended
    const newNode = new Node(key, value);
    // Set headNode to new node if list is empty
    if (this.headNode === null) {
      this.headNode = newNode;
      return;
    }
    // Iterate through list until the end is found
    let currentNode = this.headNode;
    while (currentNode.link != null) {
      currentNode = currentNode.link;
    }

    if (currentNode.key === key) {
      currentNode.value = value;
      return;
    }
    // link the last element to the new element
    currentNode.link = newNode;
  }

  /**
   *
   * @returns The total number of nodes in the list
   */
  size() {
    let listSize = 0;

    // If list is empty return 0
    if (this.headNode === null) return listSize;

    // Set current node to the head node and add one to the list size
    let currentNode = this.headNode;
    listSize += 1;

    // Iterate through list and add 1 to list size for each node
    while (currentNode.link != null) {
      listSize += 1;
      currentNode = currentNode.link;
    }
    return listSize;
  }

  /**
   *
   * @param {*} index
   * @returns The node at the given index
   */
  at(index) {
    // Log message if index is not within the list
    if (index < 0 || index >= this.size()) {
      return "Index out of Bounds";
    }

    // Iterate to index and return the node
    let currentNode = this.headNode;
    for (let i = 0; i < index; i += 1) {
      currentNode = currentNode.link;
    }
    return currentNode;
  }

  /**
   *
   * @param {*} value
   * @returns True if the passed in value is in the list and otherwise returns false.
   */
  contains(value) {
    const listSize = this.size();
    let currentNode = this.headNode;

    // Iterate thorough list and return true if value is found
    for (let i = 0; i < listSize; i += 1) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.link;
    }
    return false;
  }

  /**
   *
   * @param {*} key
   * @returns The index of the node containing key, or null if not found.
   */
  find(key) {
    const listSize = this.size();
    let currentNode = this.headNode;

    // Iterate through list and return index of node if value is found
    for (let i = 0; i < listSize; i += 1) {
      if (currentNode.key === key) {
        return i;
      }
      currentNode = currentNode.link;
    }
    return null;
  }

  /**
   * Represents the LinkedList as a string in the format (value) -> (value) -> (value) -> null,
   * and logs it to the console.
   */
  toString() {
    // If the list is empty, print "null"
    if (this.size() === 0) {
      console.log("null");
      return;
    }

    // Append headNode value to the string
    let currentNode = this.headNode;
    let linkedListString = `(${currentNode.key}: ${currentNode.value}) -> `;

    // Iterate through the list and append node values to the string
    while (currentNode.link != null) {
      currentNode = currentNode.link;
      linkedListString += `(${currentNode.key}: ${currentNode.value}) -> `;
    }

    // Append "null" to signify the end of the list and log to the console
    linkedListString += "null";
    console.log(linkedListString);
  }

  /**
   * Inserts a new node with the provided value at the given index.
   * @param {*} value
   * @param {*} index
   */
  insertAt(value, index) {
    const size = this.size();
    if (index < 0 || index > size - 1) {
      console.log("Index out of Bounds");
      return;
    }

    const nodeBeforeIndexToInsert = this.at(index - 1);
    const currentNodeAtIndexToInsert = this.at(index);

    if (index === 0) {
      this.headNode = new Node(value, currentNodeAtIndexToInsert);
    } else {
      nodeBeforeIndexToInsert.link = new Node(
        value,
        currentNodeAtIndexToInsert,
      );
    }
  }

  /**
   * Removes the node at the given index.
   * @param {*} index
   */
  removeAt(index) {
    const size = this.size();
    if (index < 0 || index > size - 1) {
      return;
    }

    const nodeBeforeIndexToRemove = this.at(index - 1);
    const nodeAfterIndexToRemove = this.at(index + 1);

    if (index === 0) {
      this.headNode = nodeAfterIndexToRemove;
    } else if (index === size - 1) {
      nodeBeforeIndexToRemove.link = null;
    } else {
      nodeBeforeIndexToRemove.link = nodeAfterIndexToRemove;
    }
  }
}

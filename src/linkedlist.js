import Node from "./node";

export default class LinkedList {
  constructor() {
    this.headNode = null;
  }

  /**
   * Adds a new node containing value to the end of the list
   * @param {*} value
   */
  append(value) {
    // Create Node to be appended
    const newNode = new Node(value);
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
    // link the last element to the new element
    currentNode.link = newNode;
  }

  /**
   * Adds a new node containing value to the start of the list
   * @param {*} value
   */
  prepend(value) {
    this.headNode = new Node(value, this.headNode);
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
   * @returns first node in the list, null if list is empty
   */
  head() {
    return this.headNode;
  }

  /**
   *
   * @returns The last node in the list, null if empty
   */
  tail() {
    // Return null if list is empty
    if (this.headNode === null) return null;

    // Iterate to end of the list and return the last node
    let currentNode = this.headNode;
    while (currentNode.link != null) {
      currentNode = currentNode.link;
    }
    return currentNode;
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
   * Removes the last element from the list
   */
  pop() {
    const listSize = this.size();
    if (listSize === 0) {
      console.log("List is empty");
      return;
    }

    // Reset head node to null if list size is 1
    if (listSize === 1) {
      this.headNode = null;
      return;
    }

    // Remove link on second to last node
    const secondToLastNode = this.at(listSize - 2);
    secondToLastNode.link = null;
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
   * @param {*} value
   * @returns The index of the node containing value, or null if not found.
   */
  find(value) {
    const listSize = this.size();
    let currentNode = this.headNode;

    // Iterate through list and return index of node if value is found
    for (let i = 0; i < listSize; i += 1) {
      if (currentNode.value === value) {
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
    let linkedListString = `(${currentNode.value}) -> `;

    // Iterate through the list and append node values to the string
    while (currentNode.link != null) {
      currentNode = currentNode.link;
      linkedListString += `(${currentNode.value}) -> `;
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
      console.log("Index out of Bounds");
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

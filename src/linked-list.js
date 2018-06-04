class LinkedList {
  /* Do not modify the constructor */
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /* Add the given value to the tail
  of the list. The `tail` pointer
  should be updated accordingly */
  addToTail(value) {
    const node = {value: value, next: null};
    if (this.head === null) this.head = node;
    if (this.tail !== null) this.tail.next = node;
    this.tail = node;
  }

  /* Remove the list's `head` value
  The `head` pointer should be updated
  accordingly */
  removeHead() {
    const head = this.head;
    const nextHead = head.next;
    this.head = nextHead;
    return head.value;
  }

  /* Searches the list for the given value
  Returns true or false accordingly */
  contains(value) {
    let currNode = this.head;
    while (currNode !== null){
      if (currNode.value === value) return true;
      currNode = currNode.next;
    }
    return false;
  }

  /* Finds and returns the maximal value
  of all the values in the list */
  getMax() {
      let max = 0;
      let currNode = this.head;
      while (currNode !== null) {
        if (currNode.value > max) max = currNode.value;
        currNode = currNode.next;
      }
      console.log(max);
      return  max === 0 ? null : max
  }
}

module.exports = LinkedList;

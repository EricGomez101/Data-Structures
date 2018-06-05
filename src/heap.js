class Heap {
  /* Do not modify the constructor */
  constructor() {
    this.storage = [];
  }


  // 2 * i + 1 / 2
  /* Insert the given value into the heap.
  The heap should maintain the heap property
  after insertion */
  insert(value) {
    this.storage.push(value);
    this.bubbleUp(this.storage.length - 1);
  }

  /* Remove the maximal value from the heap and
  return it. The heap should maintain the heap
  property after removing the maximal value */
  delete() {
    this.siftDown(0);
    return this.storage.shift();
  }

  /* Return the maximal value in the heap
  without removing it */
  getMax() {
    return this.storage[0];
  }

  /* Return the size of the heap */
  getSize() {
    return this.storage.length;
  }

  /* Moves the element at the specified index "up"
  the heap by swapping it with its parent if its
  parent value is less than the value located at
  the input index */
  bubbleUp(index) {
      const parent = Math.floor((index - 1) / 2);
      if (this.storage[parent] < this.storage[index]) {
        [this.storage[parent], this.storage[index]] = [this.storage[index], this.storage[parent]]
        this.bubbleUp(parent);
      }
  }

  /* Move the element at the specified index "down"
  the heap by swapping it with its larger child if its
  child's value is greater than the value located at
  the input index */
  siftDown(index) {
    const maxChild = this.storage[index * 2 + 2] > this.storage[index * 2 + 1] ? index * 2 + 2 : index * 2 + 1;
    if (this.storage[index] < this.storage[maxChild]) [this.storage[index], this.storage[maxChild]] = [this.storage[maxChild], this.storage[index]], this.siftDown(maxChild);
  }
}

module.exports = Heap;

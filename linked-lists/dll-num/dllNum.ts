import { IndexError } from "../common/ll";


/**
 * DLLNodeNum: node for a doubly-linked list of numbers.
 *
 * - val
 * - next: next DLLNodeNum or null
 * - prev: previous DLLNodeNum or null
 */

class DLLNodeNum {
  val: number;
  next: DLLNodeNum | null;
  prev: DLLNodeNum | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}


/**
 * Doubly-Linked list of numbers.
 */

class DLLNum {
  head: DLLNodeNum | null;
  tail: DLLNodeNum | null;
  length: number;

  constructor(vals: number[] = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (const val of vals) this.push(val);
  }

   /** _getNodeAt(idx): retrieve node at idx.
   *
   * Returns null if not found.
   **/

  _getNodeAt(idx: number): DLLNodeNum | null {
    if(this.length === 0 || idx > this.length - 1 || idx < 0) {
      return null;
    }

    const isFirstHalf = (idx / this.length) <= .5;

    if(isFirstHalf) {
      let current = this.head;
      let count = 0;

      while (true) {
        if(count === idx) {
          return current;
        }

        current = current!.next;
        count++;
      }
    } else {
      let current = this.tail;
      let count = this.length - 1;

      while (true) {
        if(count === idx) {
          return current;
        }

        current = current!.prev;
        count--;
      }
    }
  }

  /** push(val): add new value to end of list. */

  push(val: number): void {

  }

  /** unshift(val): add new value to start of list. */

  unshift(val: number): void {
  }

  /** pop(): return & remove last item.
   *
   * Throws IndexError on empty list.
   **/

  pop(): number {
    return 42;
  }

  /** shift(): return & remove first item.
   *
   * Throws IndexError on empty list.
   **/

  shift(): number {
    return 42;
  }

  /** getAt(idx): get val at idx.
   *
   * Throws IndexError if not found.
   **/

  getAt(idx: number): number {

  }

  /** setAt(idx, val): set val at idx to val.
   *
   * Throws IndexError if not found.
   **/

  setAt(idx: number, val: number): void {
  }

  /** insertAt(idx, val): add node w/val before idx.
   *
   * Throws IndexError if not found.
   **/

  insertAt(idx: number, val: number): void {

  }

  /** removeAt(idx): return & remove item at idx,
   *
   * Throws IndexError if not found.
   **/

  removeAt(idx: number): number {
    return 42;
  }
}


export { DLLNum, IndexError };
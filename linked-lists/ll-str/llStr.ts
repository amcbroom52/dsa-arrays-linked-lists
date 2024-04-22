/** IndexError: raised when index not found. */

class IndexError extends Error {
}

/**
 * NodeStr: node for a singly-linked list of string.
 *
 * - val
 * - next: next NodeStr or null
 */

class NodeStr {
  val: string;
  next: NodeStr | null;

  constructor(val: string) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Linked list of numbers.
 */

class LLStr {
  head: NodeStr | null;
  tail: NodeStr | null;
  length: number;

  constructor(vals: string[] = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (const val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val: string): void {
    const newNode = new NodeStr(val);

    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val: string): void {
    const newNode = new NodeStr(val);

    if (this.tail === null) this.tail = newNode;
    if (this.head !== null) newNode.next = this.head;

    this.head = newNode
    this.length++;
   }

  /** pop(): return & remove last item.
   *
   * Throws IndexError on empty list.
   **/

  pop(): string {
    if (this.length === 0) throw new IndexError();

    let curr = this.head;
    let prev = null;

    while (curr!.next !== null){
      prev = curr;
      curr = curr!.next;
    }

    const returnVal = this.tail!.val;
    this.tail = prev;

    if (this.tail){
      this.tail.next = null;
    } else {
      this.head = null;
    }

    this.length--;
    return returnVal;
  }

  /** shift(): return & remove first item.
   *
   * Throws IndexError on empty list.
   **/

  shift(): string {
    if (this.length === 0) throw new IndexError();

    const returnVal = this.head!.val;

    this.head = this.head!.next;

    this.length--;
    if (this.length === 0){
      this.tail = null;
    }
    return returnVal
  }

  /** getAt(idx): get val at idx.
   *
   * Throws IndexError if not found.
   **/

  getAt(idx: number): string {
    let currIdx = 0;
    let currNode = this.head;

    while(currIdx < this.length){
      if (currIdx === idx){
        return currNode!.val;
      }
      currNode = currNode!.next;
      currIdx++;
    }
    throw new IndexError();
  }

  /** setAt(idx, val): set val at idx to val.
   *
   * Throws IndexError if not found.
   **/

  setAt(idx: number, val: string): void {
    let currIdx = 0;
    let currNode = this.head;

    while(currIdx < this.length){
      if (currIdx === idx){
       currNode!.val = val;
       return;
      }
      currNode = currNode!.next;
      currIdx++;
    }
    throw new IndexError();
  }

  /** insertAt(idx, val): add node w/val before idx.
   *
   * Throws IndexError if not found.
   **/

  insertAt(idx: number, val: string): void {
    if (idx > this.length || idx < 0) throw new IndexError();

    if (idx === 0){
      this.unshift(val);
      return;
    }

    if (idx === this.length){
      this.push(val);
      return;
    }

    let currIdx = 0;
    let currNode = this.head;
    const newNode = new NodeStr(val);

    while(currIdx < this.length){
      if (currIdx === idx-1){
        newNode!.next = currNode!.next;
        currNode!.next = newNode;
      }
      currNode = currNode!.next;
      currIdx++;
    }
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx,
   *
   * Throws IndexError if not found.
   **/

  removeAt(idx: number): string {
    if (idx >= this.length || idx < 0) throw new IndexError();

    if (idx === 0){
      return this.shift();
    }

    if (idx === this.length){
      return this.pop();
    }

    let currIdx = 1;
    let prevNode = this.head;
    let currNode = this.head!.next;
    let nextNode = currNode!.next;

    while (currIdx < idx){
      prevNode = currNode;
      currNode = nextNode;
      nextNode = currNode!.next;
      currIdx++;
    }

    prevNode!.next = nextNode;
    this.length--;
    return currNode!.val;

  }

  /** toArray (useful for tests!) */

  toArray(): string[] {
    const out = [];
    let current = this.head;

    while (current) {
      out.push(current.val);
      current = current.next;
    }

    return out;
  }
}


export {
  IndexError,
  LLStr,
  NodeStr,
};
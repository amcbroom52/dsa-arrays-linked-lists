import { LLStr, LLNodeStr } from "../common/ll";


/** reverseInPlace() reverse list in place.*/

function reverseInPlace(lst: LLStr): void {
  let current = lst.head;
  const nodeArr: LLNodeStr[] = [];

  while (current != null) {
    nodeArr.push(current);
    current = current.next;
  }

  for(let i = nodeArr.length - 1; i >= 0; i--) {
    nodeArr[i]!.next = nodeArr[i - 1] || null;
  }

  lst.head = nodeArr[nodeArr.length - 1] || null;
  lst.tail = nodeArr[0] || null;
}


export { reverseInPlace };
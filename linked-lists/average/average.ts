import { LLStr } from "../common/ll";

/** return average (mean) of list values.
 *
 * Returns 0 for empty list.
 **/

function average(lst: LLStr): number {
  let current = lst.head;
  let count = 0;
  let sum = 0;

  while (current !== null) {
    sum += Number(current.val);
    count++;
    current = current.next;
  }

  return sum / count || 0;
}

export { average };
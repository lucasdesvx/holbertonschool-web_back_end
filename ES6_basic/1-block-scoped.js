export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    // These are now new variables scoped only to this block
    let task = true;
    let task2 = false;
  }

  return [task, task2];
}

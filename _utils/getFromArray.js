module.exports = function (array, key, value) {
  // get the index of the item in question
  const index = array.findIndex(item => item[key] === value);

  // if no item matched, return nothing
  if (index === -1) return

  // else, return the item
  return array[index];
}

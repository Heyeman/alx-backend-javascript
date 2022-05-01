const cleanSet = (set, startString) => {
  const arr = [];
  set.forEach((element) => {
    if (startString.length && element.slice(0, startString.length) === startString) {
      arr.push(element.slice(startString.length));
    }
  });
  return arr.join('-');
};
export default cleanSet;

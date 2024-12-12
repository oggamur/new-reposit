function getRandomInt(min, max) {
  if (min < 0) {
    return "Измените значение min";
  }
  if (max <= min) {
    return "Измените значение max";
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function checkMaxLengthOfString(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }
  return false;
}

export { getRandomInt };

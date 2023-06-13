function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // Write your code here.
  if (redShirtSpeeds.length == 0) return 0
  let sortedRed = redShirtSpeeds.sort((a,b) => a - b)
  let sortedBlue
  if (fastest) {
    sortedBlue = blueShirtSpeeds.sort((a,b) => b - a)
  } else {
    sortedBlue = blueShirtSpeeds.sort((a,b) => a - b)
  }
  let speeds = []
  for (i = 0; i < redShirtSpeeds.length; i ++) {
      sortedBlue[i] > sortedRed[i] ? speeds.push(sortedBlue[i]) : speeds.push(sortedRed[i])
  }
  return speeds.reduce((a,b) => a + b);

  // CREATE IF STATEMENT BEFORE SORTING
}

// Do not edit the line below.
exports.tandemBicycle = tandemBicycle;

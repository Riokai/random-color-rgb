var getRandom = (max = 999999999999, min = 0) => {
  return min + Math.floor(Math.random() * (max - min))
}

var getColor = (max = 255, min = 0) => {
  return 'rgb(' + getRandom(max, min) + ',' + getRandom(max, min) + ',' + getRandom(max, min) + ')'
}

module.exports = getColor

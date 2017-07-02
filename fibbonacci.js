var pry = require('pryjs')

var quantity = 40

function fibbonacciSequence(quantity) {
  var nums = []
  for (var i = 0; i < quantity; i++) {
    if (i === 0) {
      nums.push(0)
    } else if (i === 1 ) {
      nums.push(1)
    } else {
      nums.push((nums[i - 1]) + (nums[i - 2]) )
    }
  }
  var fives = []
  var padding = Math.max(...nums).toString().length + 1
  for (var i = 0; i < nums.length - 4; i+=5) {
    var snippet = nums.slice(i, i + 5)
    paddedNums = snippet.map(function (number) {
      return number.toString().padStart(padding)
    })
    fives.push(paddedNums.join(' '))
  }
  fives.forEach(function(line) {
    console.log(line)
  })
}

fibbonacciSequence(quantity)
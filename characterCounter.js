var string1 = "I really want to work for Wingspan"

function characterCounter(string) {
  var counts = string.split('').reduce(function (obj, character){
    if (obj[character]){
      obj[character] = obj[character] + 1;
    } else {
      obj[character] = 1;
    }
    return obj;
  }, {})
  countsArray = Object.keys(counts).map(function (key){
    return [key, counts[key]];
  })
  sortedArray = countsArray.sort(function (a, b) {
    return b[1] - a[1]
  })
  string = sortedArray.forEach(function(count){
    console.log(count[0] + ": " + count[1])
  })
}


console.log(characterCounter(string1))
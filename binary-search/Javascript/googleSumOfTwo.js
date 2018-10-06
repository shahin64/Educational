var c1 = [1, 2, 3, 4, 6, 9];
var c2 = [1, 2, 4, 4, 11, 14];

// n * n
function simpleSolution(c, sum) {
  for (var i = 0; i < c.length; i++) {
    for (var j = i + 1; j < c.length; j++) {
      if (c[i] + c[j] == sum) {
        return true;
      }
    }
  }
  return false;
}

console.log(simpleSolution(c1, 5));

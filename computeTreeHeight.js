console.clear();

function heightSlow(parent) {
  var maxHeight = 0;
  for (var i = 0; i < parent.length; i++) {
    var height = 0;
   
    for (var vertex = i; vertex != -1; vertex = parent[vertex]) {
      height++;
    }
    maxHeight = Math.max(maxHeight, height);
  }
  return maxHeight;
}

function heightFast(parent) {
  var depth = [];
  var N = parent.length;

  function recur(parent, i, depth) {
    if (depth[i] !== 0) return;

    if (parent[i] === -1) {
      depth[i] = 1;
      return;
    }

    if (depth[parent[i]] === 0) recur(parent, parent[i], depth);


    depth[i] = depth[parent[i]] + 1;
  }

  var vertex;
 
  for (vertex = 0; vertex < N; vertex++)
    depth[vertex] = 0;


  for (vertex = 0; vertex < N; vertex++)
    recur(parent, vertex, depth);

 
  var height = 0;
  for (vertex = 0; vertex < N; vertex++) {
    height = Math.max(height, depth[vertex]);
  }
  return height;
}


//console.log(heightSlow([-1,0, 4, 0, 3])); // 3



console.log(heightFast([-1, 0, 4, 0, 3])); // 4
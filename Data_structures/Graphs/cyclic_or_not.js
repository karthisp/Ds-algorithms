const Graph = require('./graphs_undirected');
const DirectedGraph = require('./graphs_directed');

let g1 = new DirectedGraph();
g1.addVertex(0);
g1.addVertex(1);
g1.addVertex(2);
g1.addVertex(3);
g1.addEdges(0, 1);
g1.addEdges(0, 2);
g1.addEdges(1, 2);
g1.addEdges(2, 3);

console.log(checkCyclicDFS(0, g1))

function checkCyclicBFS(startFrom, graph) {
    let visited = {};
    let previous = {};
    let cyclic = false;
    let queue = [startFrom];
    let graphVertices = graph.adjList;
    visited[startFrom] = true;
    while (queue.length) {
        let currentVertex = queue.shift();
        graphVertices[currentVertex].forEach(neigh => {
            if (previous[neigh] || currentVertex === neigh) {
                cyclic = true
            }
            if (!visited[neigh]) {
                visited[neigh] = true;
                queue.push(neigh);
            }
        });
        previous[currentVertex] = true;
    }
    return cyclic;
}

function checkCyclicDFS(startFrom, graph){
    let visited = {};
    let previous = {};
    let cyclic = false
    let graphVertices = graph.adjList;
    function cyclicCheckDFS(curr, visited, previous){
        visited[curr] = true;
        previous[curr] = true;
        graphVertices[curr].forEach(neigh => {
            if(previous[neigh]){
                cyclic = true
            }
            if(!visited[neigh]){
                return cyclicCheckDFS(neigh, visited, previous)
            }
        })
        return cyclic
    }
    return cyclicCheckDFS(startFrom, visited, previous)
}
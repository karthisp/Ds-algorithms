const Graph = require('./graphs_undirected');
const DirectedGraph = require('./graphs_directed');

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
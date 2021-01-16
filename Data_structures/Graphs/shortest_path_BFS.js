const Graph = require('./graphs');

let g1 = new Graph();
let family = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let i=0; i<family.length; i++){
    g1.addVertex(family[i]);
}

g1.addEdges(0, 1)
g1.addEdges(1, 3)
g1.addEdges(2, 4)
g1.addEdges(5, 1)
g1.addEdges(0, 2)
g1.addEdges(5, 4)
g1.addEdges(4, 3)
g1.addEdges(4, 3)
g1.addEdges(3, 9)
g1.addEdges(9, 6)
g1.addEdges(6, 4)
g1.addEdges(2, 8)
g1.addEdges(9, 7)
g1.addEdges(6, 7)
g1.addEdges(9, 9)

function shortestPathBFS(graph, source, destination){
    let enqueue = [source];
    let predecessor = {};
    let countLevel = 0;
    let visited = {};
    visited[source] = true;
    predecessor[source] = countLevel;
    // levels of the neighbouring vertices
    while(enqueue.length){
        let vertex = enqueue.shift();
        let nextLevel = ++predecessor[vertex];
        graph.adjList[vertex].forEach(neighbour => {
            if(!visited[neighbour]){
                visited[neighbour] = true;
                enqueue.push(neighbour);
                predecessor[neighbour] = nextLevel; 
            }
        })
    }
    // finding parent vertices from destination
    let pathFrom = destination;
    let path = [pathFrom];
    while(pathFrom !== source){
        graph.adjList[pathFrom].forEach(parentVertex => {
            if(predecessor[parentVertex] < predecessor[pathFrom]){
                path.unshift(parentVertex)
                pathFrom = parentVertex;
            }
        })
    }
    return path;
}

console.log(shortestPathBFS(g1, 1, 3))
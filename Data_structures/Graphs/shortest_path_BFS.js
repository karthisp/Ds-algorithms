const Graph = require('./graphs_undirected');

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
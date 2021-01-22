const Graph = require('./graphs_undirected');
let g1 = new Graph();
g1.addVertex(0);
g1.addVertex(1);
g1.addVertex(2);
g1.addVertex(3);
g1.addVertex(4);
g1.addVertex(5);
g1.addVertex(6);
g1.addVertex(7);

g1.addEdges(0, 1);
g1.addEdges(0, 3);
g1.addEdges(1, 2);
g1.addEdges(3, 7);
g1.addEdges(3, 4);
g1.addEdges(4, 5);
g1.addEdges(4, 6);
g1.addEdges(4, 7);
g1.addEdges(5, 6);
g1.addEdges(6, 7);


// function shortestPathBFS(graph, source, destination){
//     let enqueue = [source];
//     let predecessor = {};
//     let countLevel = 0;
//     let visited = {};
//     visited[source] = true;
//     predecessor[source] = countLevel;
//     // levels of the neighbouring vertices
//     while(enqueue.length){
//         let vertex = enqueue.shift();
//         let nextLevel = ++predecessor[vertex];
//         graph.adjList[vertex].forEach(neighbour => {
//             if(!visited[neighbour]){
//                 visited[neighbour] = true;
//                 enqueue.push(neighbour);
//                 predecessor[neighbour] = nextLevel; 
//             }
//         })
//     }
//     // finding parent vertices from destination
//     let pathFrom = destination;
//     let path = [pathFrom];
//     while(pathFrom !== source){
//         graph.adjList[pathFrom].forEach(parentVertex => {
//             if(predecessor[parentVertex] < predecessor[pathFrom]){
//                 path.unshift(parentVertex)
//                 pathFrom = parentVertex;
//             }
//         })
//     }
//     return path;
// }

console.log(shortestPathBFS(g1, 0, 4))

function shortestPathBFS(graph, start, end) {
    let parentTracker = {};
    let visitedVertices = {};
    let queue = [start];
    let shortestPath = [end];
    visitedVertices[start] = true;
    parentTracker[start] = null;
    while (queue.length) {
        let vertex = queue.shift();
        let neighboutsList = graph.adjList[vertex];
        for (let i = 0; i < neighboutsList.length; i++) {
            if (!visitedVertices[neighboutsList[i]]) {
                visitedVertices[neighboutsList[i]] = true;;
                queue.push(neighboutsList[i]);
                parentTracker[neighboutsList[i]] = vertex
            }
            if (neighboutsList[i] === end) {
                break;
            };
        }
    }
    let backTrackFrom = end;
    while (parentTracker[backTrackFrom] !== null) {
        shortestPath.unshift(parentTracker[backTrackFrom]);
        backTrackFrom = parentTracker[backTrackFrom];
    }
    return shortestPath;
}
const Graph = require('./graphs_undirected');
const PriorityQueue = require('./priority_queue')

function shortestPath(graph, startPt, endPt) {
    let verticesQueue = new PriorityQueue();
    let distances = {}
    let previousVertices = {};
    let path = [];
    let smallestVertex;

    // Add all vertices to the list
    for (let vertex in graph.adjList) {
        if (vertex === startPt) {
            distances[vertex] = 0;
            verticesQueue.enqueue(vertex, 0)
        } else {
            distances[vertex] = Infinity;
            verticesQueue.enqueue(vertex, Infinity);
        }
        previousVertices[vertex] = null;
    }
    while (verticesQueue.values.length) {
        smallestVertex = verticesQueue.dequeue().val;
        if(smallestVertex === endPt){
            while(previousVertices[smallestVertex]){
                path.push(smallestVertex);
                smallestVertex = previousVertices[smallestVertex];
            }
            break;
        } 

        if(smallestVertex || distances[smallestVertex] !== Infinity){
            for(let neighbor in graph.adjList[smallestVertex]){
                let nextNode = graph.adjList[smallestVertex][neighbor];
                let candidate = distances[smallestVertex] + nextNode.weight;
                let nextNeighbor = nextNode.node;
                if(candidate < distances[nextNeighbor]){
                    distances[nextNeighbor] = candidate;
                    previousVertices[nextNeighbor] = smallestVertex;
                    verticesQueue.enqueue(nextNeighbor, candidate);
                }
            }
        }    
    }
    return path.concat(smallestVertex).reverse();
}
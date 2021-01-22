const Graph = require('./graphs_undirected');
const PriorityQueue = require('./priority_queue')

function shortestPathDijkstras(graph, source, destination) {
    let distances = {};
    let paths = {};
    let visited = {};
    let result = [destination]
    visited[source] = true;
    let graphList = graph.adjList;
    let vertexQueue = new PriorityQueue();
    vertexQueue.enqueue(source, 0);

    for (let vertex in graphList) {
        if (vertex == source) {
            distances[vertex] = 0;
        } else {
            distances[vertex] = Infinity;
        }
        paths[vertex] = null;
    }

    while(vertexQueue.values.length){
        let vertex = vertexQueue.dequeue();
        graphList[vertex.val].forEach(neigh => {
            if(!visited[neigh.node]){
                visited[neigh.node] = true;
                vertexQueue.enqueue(neigh.node, vertex.priority + neigh.weight);
            }
            let wtFromPrtToChi = vertex.priority + neigh.weight;
            if(wtFromPrtToChi < distances[neigh.node]){
                distances[neigh.node] = wtFromPrtToChi
                paths[neigh.node] = vertex.val
            }
        })
    }

    let backTrackFrom = destination;
    let totalDistance = distances[destination];
    while (paths[backTrackFrom] !== null) {
        result.unshift(paths[backTrackFrom]);
        backTrackFrom = paths[backTrackFrom];
    }

    return distances
}
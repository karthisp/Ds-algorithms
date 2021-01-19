const Graph = require('./graphs_undirected');
const PriorityQueue = require('./priority_queue');

function prims(graph) {
    let path = {}
    let distances = {}
    let result = [];
    let vertices = new PriorityQueue();
    let graphList = graph.adjList;
    for (let vertex in graphList) {
        if (Object.keys(distances).length > 0) {
            distances[vertex] = Infinity;
        } else {
            distances[vertex] = 0;
            vertices.enqueue(vertex, 0 )
        }
        path[vertex] = null
    }
    
    while(Object.keys(distances).length > 0){
        let graphVertex = vertices.dequeue().val
        graphList[graphVertex].forEach(neighbour => {
            if(distances[neighbour.node]){
                if(path[neighbour.node] === null || neighbour.weight < distances[neighbour.node]){
                    path[neighbour.node] = [graphVertex, neighbour.node];
                    distances[neighbour.node] = neighbour.weight;
                    vertices.enqueue(neighbour.node, neighbour.weight)
                }
            }
        })
        delete distances[graphVertex]
    }
    
    for(let paths in path){
        if(path[paths]){
            result.push(path[paths])
        }
    }
    return result
}
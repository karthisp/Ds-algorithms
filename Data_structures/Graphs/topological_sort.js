const Graph = require('./graphs_directed');

function topSort(graph){
    let stack = [];
    let visitedVertices = {};
    let graphVertices = graph.adjList;
    for(let vertex in graphVertices){
        if(visitedVertices[vertex]){
            continue;
        }
        topSortCheckChild(graphVertices, vertex, stack, visitedVertices)
    }
    return stack;
}

function topSortCheckChild(graph, vertex, stack, visited){
    visited[vertex] = true;
    for(let i=0; i<graph[vertex].length; i++){
        if(visited[graph[vertex][i]]){
            continue;
        }
        topSortCheckChild(graph, graph[vertex][i], stack, visited)
    }
    stack.unshift(vertex)
}
const Graph = require('./graphs_undirected');
const DirectedGraph = require('./graphs_directed');

function checkCyclic(start, graphList) {
    let verticesToVisit = [start]
    let visitedVertices = {};
    let cyclic = false;
    visitedVertices[start] = true;
    while (verticesToVisit.length > 0) {
        let vertex = verticesToVisit.pop();
        graphList.adjList[vertex].forEach(edges => {
            if (visitedVertices[edges]) {
                cyclic = true;
                return;
            } else {
                visitedVertices[edges] = true;
                verticesToVisit.push(edges)
            }
        })
    }
    return cyclic
}
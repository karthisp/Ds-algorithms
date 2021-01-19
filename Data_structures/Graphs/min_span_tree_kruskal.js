const Graph = require('./graphs_undirected');
const PQueue = require('./priority_queue');
const Dsets = require('./Disjoint_set');
const DisjointSets = require('./Disjoint_set');

let g1 = new Graph();
g1.addVertex('A')
g1.addVertex('B')
g1.addVertex('C')
g1.addVertex('D')
g1.addVertex('E')
g1.addVertex('F')
g1.addVertex('G')

g1.addEdges('A', 'B', 1)
g1.addEdges('B', 'C', 2)
g1.addEdges('C', 'D', 3)
g1.addEdges('A', 'D', 2)
g1.addEdges('B', 'D', 4)
g1.addEdges('D', 'E', 4)
g1.addEdges('C', 'E', 2)
g1.addEdges('E', 'F', 3)
g1.addEdges('F', 'G', 2)
g1.addEdges('D', 'F', 5)

function buildSets(graph) {
    let graphEdges = graph.adjList;
    let sortedEdgOrder = new PQueue();
    let visited = {};
    for (let vertex in graphEdges) {
        graphEdges[vertex].forEach(neighbours => {
            sortedEdgOrder.enqueue([vertex, neighbours.node], neighbours.weight)
        })
    }
    return sortedEdgOrder
}

function kurskals(graph) {
    let graphEdges = graph.adjList;
    let ds = new DisjointSets();
    let unions = buildSets(graph);
    let sets = unions.values;
    // make individuals sets with vertices
    for (let vertex in graphEdges) {
        ds.makeSet(vertex);
    }
    // // make unions
    for(let i=0; i<sets.length; i++){
        let pairs = sets[i].val
        ds.union(pairs[0], pairs[1])
    }
    return ds
}

console.log(kurskals(g1))
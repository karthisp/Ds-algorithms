class DirectedGraph {
    constructor() {
        this.adjList = {};
    }
    addVertex(key) {
        if (!this.adjList[key]) {
            this.adjList[key] = [];
        }
        return this.adjLis;
    }
    addEdges(vertex1, vertex2) {
        if (this.adjList[vertex1] && this.adjList[vertex2]) {
            this.adjList[vertex1].push(vertex2)
        }
        return this.adjList
    }
    removeEdge(vertex1, vertex2) {
        if (this.adjList[vertex1] && this.adjList[vertex2]) {
            let vtx1 = this.adjList[vertex1];
            vtx1.splice(vtx1.indexOf(vertex2), 1);
            return this.adjList;
        } else {
            return 'One or both the vertices are missing'
        }
    }
    removeVertex(vertex1) {
        if (this.adjList[vertex1]) {
            let vertexVisited = [vertex1];
            let visitedVertices = {};
            visitedVertices[vertex1] = true;
            while (vertexVisited.length) {
                let node = vertexVisited.shift();
                this.adjLis[node].forEach(neighbours => {
                    if (!visitedVertices[neighbours]) {
                        visitedVertices[neighbours] = true;
                        if (neighbours === vertex1) {
                            removeEdge(neighbours, vertex1)
                        }
                    }
                    vertexVisited.push(neighbours)
                })
            }
            delete this.adjList[vertex1]
            return this.adjList;
        }
    }
    getVertex(vertex) {
        if (this.adjList[vertex]) {
            return this.adjList[vertex]
        } else {
            return 'Vertex not present'
        }
    }
    graphBFS(startFrom) {
        let vertexQueue = [startFrom];
        let beenToVertices = []
        let visitedVertices = {};
        visitedVertices[startFrom] = true;
        while (vertexQueue.length) {
            let vertex = vertexQueue.shift();
            beenToVertices.push(vertex)
            this.adjList[vertex].forEach(neighbourVertices => {
                if (!visitedVertices[neighbourVertices]) {
                    visitedVertices[neighbourVertices] = true;
                    vertexQueue.push(neighbourVertices)
                }
            })
        }
        return beenToVertices
    }
    graphDFS(startFrom) {
        let vertexStack = [startFrom];
        let beenToVertices = [];
        let visitedVertices = {};
        visitedVertices[startFrom] = true;
        while (vertexStack.length) {
            let vertex = vertexStack.pop();
            beenToVertices.push(vertex)
            this.adjList[vertex].forEach(neighbourVertices => {
                if (!visitedVertices[neighbourVertices]) {
                    visitedVertices[neighbourVertices] = true;
                    vertexStack.push(neighbourVertices)
                }
            })
        }
        return beenToVertices
    }
}

let g1 = new DirectedGraph();
let fam = ['A', 'B', 'C', 'D', 'E', 'F']
for (let i = 0; i < fam.length; i++) {
    g1.addVertex(fam[i])
}

g1.addEdges('A', 'B')
g1.addEdges('B', 'C')
g1.addEdges('C', 'D')
g1.addEdges('C', 'F')
g1.addEdges('D', 'E')
g1.addEdges('D', 'A')

module.exports = DirectedGraph;
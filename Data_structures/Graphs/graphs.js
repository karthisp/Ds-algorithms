/*
    A graph is a non-linear data structure consisting of nodes(vertices) and 
    edges(lines that connect two nodes)
*/

class Graph {
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
            this.adjList[vertex2].push(vertex1)
        }
        return this.adjList
    }
    removeEdge(vertex1, vertex2) {
        if (this.adjList[vertex1] && this.adjList[vertex2]) {
            let vtx1 = this.adjList[vertex1];
            let vtx2 = this.adjList[vertex2]
            vtx1.splice(vtx1.indexOf(vertex2), 1);
            vtx2.splice(vtx1.indexOf(vertex2), 1);
            return this.adjList;
        } else {
            return 'One or both the vertices are missing'
        }
    }
    removeVertex(vertex1) {
        if (this.adjList[vertex1]) {
            let vtx1 = this.adjList[vertex1]
            vtx1.filter(vtxEdges => {
                this.removeEdge(vertex1, vtxEdges)
            });
            delete this.adjList[vertex1]
        }
        return this.adjList
    }
    getVertex(vertex) {
        if (this.adjList[vertex]) {
            return this.adjList[vertex]
        } else{
            return 'Vertex not present'
        }
    }
}
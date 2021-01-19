class Node{
    constructor(data){
        this.data = data;
        this.parent = null;
        this.rank = null;
    }
}

class DisjointSets {
    constructor(){
        this.nodeMaps = new Map();
    }
    makeSet(data){
        let newNode = new Node(data)
        newNode.parent = newNode
        newNode.rank = 0;
        this.nodeMaps.set(data, newNode)
    }
    union(data1, data2){
        let node1 = this.nodeMaps.get(data1)
        let node2 = this.nodeMaps.get(data2)
        
        let parent1 = this.findSet(node1.parent)
        let parent2 = this.findSet(node2.parent)

        if(parent1.data === parent2.data){
            return;
        }

        if(parent1.rank >= parent2.rank){
          parent1.rank = (parent1.rank === parent2.rank)? parent1.rank+1:parent1.rank;
          parent2.parent = parent1;
        } else{
            parent1.parent = parent2;
        }
        return node2
    }
    findSet(node){
        let parent = node.parent;
        if(parent === node){
            return parent;
        }
        node.parent = this.findSet(node.parent);
        return node.parent
    }
    getParent(data){
        return this.findSet(this.nodeMaps.get(data)).data
    }
}

let d1 = new DisjointSets();
d1.makeSet(1)
d1.makeSet(2)
d1.makeSet(3)
d1.makeSet(4)
d1.makeSet(5)
d1.makeSet(6)
d1.makeSet(7)

d1.union(1, 2)
d1.union(2, 3)
d1.union(4, 5)
d1.union(6, 7)
d1.union(5, 6)
d1.union(3, 7)

// console.log(d1.getParent(1))
// console.log(d1.getParent(2))
// console.log(d1.getParent(3))
// console.log(d1.getParent(4))
// console.log(d1.getParent(5))
// console.log(d1.getParent(6))
// console.log(d1.getParent(7))

module.exports = DisjointSets;
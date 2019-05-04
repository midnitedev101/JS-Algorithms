class Graph {
  constructor() {
    this.edges = {};
    this.nodes = [];
  }

  addNode(node) {
    this.nodes.push(node);
    this.edges[node] = [];
  }

  addEdge(node1, node2, weight = 1) {
    this.edges[node1].push({node: node2, weight: weight});
    this.edges[node2].push({node: node1, weight: weight});
  }

  display() {
    let graph = "";
    this.nodes.forEach(node => {
      graph += node + "->" + this.edges[node].map(n => n.node).join(", ") + "\n";
    });
    console.log(graph);
  }
}

var newGraph = new Graph();
newGraph.addNode("Node A");
newGraph.addNode("Node B");

newGraph.addEdge(newGraph.nodes[0], newGraph.nodes[1]);

newGraph.display();

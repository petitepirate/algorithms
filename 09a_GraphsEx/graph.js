class Node {
	constructor(value, adjacent = new Set()) {
		this.value = value;
		this.adjacent = adjacent;
	}
}

class Graph {
	constructor() {
		this.nodes = new Set();
	}

	// this function accepts a Node instance and adds it to the nodes property on the graph
	addVertex(vertex) {
		this.nodes.add(vertex);
	}

	// this function accepts an array of Node instances and adds them to the nodes property on the graph
	addVertices(vertexArray) {
		for (let vertex of vertexArray) {
			this.addVertex(vertex);
		}
	}

	// this function accepts two vertices and updates their adjacent values to include the other vertex
	addEdge(v1, v2) {
		v1.adjacent.add(v2);
		v2.adjacent.add(v1);
	}

	// this function accepts two vertices and updates their adjacent values to remove the other vertex
	removeEdge(v1, v2) {
		v1.adjacent.delete(v2);
		v2.adjacent.delete(v1);
	}

	// this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
	removeVertex(vertex) {
		let arr = [];
		vertex.adjacent.forEach((num) => arr.push(num));
		arr.map((num) => {
			num.adjacent.delete(vertex);
		});
		this.nodes.delete(vertex);
	}

	// this function returns an array of Node values using DFS
	depthFirstSearch(start) {
		// let toVisitQueue = [ start ];
		// let visited = new Set(toVisitQueue);
		// while (toVisitQueue.length) {
		// 	let currNode = toVisitQueue.shift();

		// 	if (!currNode.adjacent.size) return visited;
		// 	for (let vertex of currNode.adjacent) {
		// 		if (!visited.has(vertex)) {
		// 			toVisitQueue.push(vertex);
		// 			visited.add(vertex);
		// 		}
		// 	}
		// }

		// return [ ...visited ];
		// Create an empty stack

		const stack = [ start ]; //solution code
		const result = [];
		const visited = new Set();
		let currentVertex;

		// visit node
		visited.add(start);

		// while there are still neighbors to visit
		while (stack.length) {
			currentVertex = stack.pop();
			result.push(currentVertex.value);

			// visit neighbors and push onto stack
			currentVertex.adjacent.forEach((neighbor) => {
				if (!visited.has(neighbor)) {
					visited.add(neighbor);
					stack.push(neighbor);
				}
			});
		}
		return result;
	}

	// this function returns an array of Node values using BFS
	breadthFirstSearch(start) {
		// 	let toVisitQueue = [ start ];
		// 	let visited = new Set();
		// 	while (toVisitQueue.length) {
		// 		let currNode = toVisitQueue.shift();

		// 		if (!currNode.adjacent.size) return visited;
		// 		for (let vertex of currNode.adjacent) {
		// 			if (!visited.has(vertex)) {
		// 				toVisitQueue.push(vertex);
		// 				visited.add(vertex);
		// 			}
		// 		}
		// 	}

		// 	return [ ...visited ];
		// }
		// Create an empty queue
		const queue = [ start ]; // solution code
		const result = [];
		const visited = new Set();
		let currentVertex;

		// visit node
		visited.add(start);

		// While there is still remaining vertices in queue
		while (queue.length) {
			currentVertex = queue.shift();
			result.push(currentVertex.value);

			// visit neighbors
			currentVertex.adjacent.forEach((neighbor) => {
				if (!visited.has(neighbor)) {
					visited.add(neighbor);
					queue.push(neighbor);
				}
			});
		}
		return result;
	}
}

module.exports = { Graph, Node };

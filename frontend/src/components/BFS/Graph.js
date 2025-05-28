// class GraphNode {
//     constructor(value, x, y, color) {
//         this.value = value;
//         this.x = x;
//         this.y = y;
//         this.color = color;
//     }
// }

// class Graph {
//     constructor() {
//         this.nodes = [];
//         this.edges = [];
//         this.colors = [
//             '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD',
//             '#D4A5A5', '#9B6B6B', '#E0BBE4', '#957DAD', '#4B4453'
//         ];
//     }

//     getRandomColor() {
//         return this.colors[Math.floor(Math.random() * this.colors.length)];
//     }

//     calculatePosition(index, totalNodes) {
//         const centerX = 50;
//         const centerY = 50;
//         const minRadius = 20;
//         const maxRadius = 30;
//         const radius = totalNodes > 8 ? maxRadius : minRadius;

//         const angle = (index / totalNodes) * 2 * Math.PI;
//         const x = centerX + radius * Math.cos(angle);
//         const y = centerY + radius * Math.sin(angle);

//         return { x, y };
//     }

//     isPositionOccupied(x, y, minDistance = 8) {
//         // Check for overlapping by comparing distance to each existing node
//         for (let node of this.nodes) {
//             const distance = Math.sqrt((x - node.x) ** 2 + (y - node.y) ** 2);
//             if (distance < minDistance) {
//                 return true;
//             }
//         }
//         return false;
//     }

//     addNode(value) {
//         if (this.nodes.some(node => node.value === value)) return;

//         const newPosition = this.calculatePosition(this.nodes.length, this.nodes.length + 1);

//         // Ensure node positions are spaced apart
//         if (!this.isPositionOccupied(newPosition.x, newPosition.y)) {
//             const newNode = new GraphNode(value, newPosition.x, newPosition.y, this.getRandomColor());
//             this.nodes.push(newNode);
//         } else {
//             // Attempt a new position by slightly adjusting the angle if overlap is detected
//             let retries = 0;
//             while (retries < 10) {
//                 const adjustedPosition = this.calculatePosition(this.nodes.length + retries, this.nodes.length + 1);
//                 if (!this.isPositionOccupied(adjustedPosition.x, adjustedPosition.y)) {
//                     const newNode = new GraphNode(value, adjustedPosition.x, adjustedPosition.y, this.getRandomColor());
//                     this.nodes.push(newNode);
//                     break;
//                 }
//                 retries++;
//             }
//         }
//     }

//     addEdge(node1Value, node2Value) {
//         const node1 = this.nodes.find(node => node.value === node1Value);
//         const node2 = this.nodes.find(node => node.value === node2Value);

//         if (node1 && node2 && !this.edges.some(edge => (
//             (edge.node1 === node1Value && edge.node2 === node2Value) ||
//             (edge.node1 === node2Value && edge.node2 === node1Value)
//         ))) {
//             this.edges.push({ node1: node1Value, node2: node2Value });
//         }
//     }

//     getNeighbors(nodeValue) {
//         return this.edges
//             .filter(edge => edge.node1 === nodeValue || edge.node2 === nodeValue)
//             .map(edge => (edge.node1 === nodeValue ? edge.node2 : edge.node1));
//     }

//     async bfs(startValue, highlightNode) {
//         const startNode = this.nodes.find(node => node.value === startValue);
//         if (!startNode) return;

//         const visited = new Set();
//         const queue = [startNode];

//         while (queue.length > 0) {
//             const currentNode = queue.shift();
//             if (visited.has(currentNode.value)) continue;

//             visited.add(currentNode.value);
//             highlightNode(currentNode.value);  // Highlight the current node

//             // Wait briefly to visualize BFS traversal
//             await new Promise(resolve => setTimeout(resolve, 500));

//             // Add unvisited neighbors to the queue
//             const neighbors = this.getNeighbors(currentNode.value);
//             neighbors.forEach(neighborValue => {
//                 if (!visited.has(neighborValue)) {
//                     queue.push(this.nodes.find(node => node.value === neighborValue));
//                 }
//             });
//         }
//     }

//     getNodes() {
//         return this.nodes;
//     }

//     getEdges() {
//         return this.edges;
//     }
// }

// export default Graph;

class Graph {
    constructor() {
        this.nodes = [];
        this.edges = [];
        this.initialColor = '#4ECDC4'; // Set a uniform initial color for all nodes
    }

    addNode(value) {
        const newNode = {
            value,
            x: Math.random() * 90 + 5, // Random x position
            y: Math.random() * 90 + 5, // Random y position
            color: this.initialColor,   // Set initial color for the node
        };
        this.nodes.push(newNode);
    }

    addEdge(node1Value, node2Value) {
        this.edges.push({ node1: node1Value, node2: node2Value });
    }

    getNeighbors(nodeValue) {
        return this.edges
            .filter(edge => edge.node1 === nodeValue || edge.node2 === nodeValue)
            .map(edge => (edge.node1 === nodeValue ? edge.node2 : edge.node1));
    }

    async bfs(startValue, highlightNode) {
        const startNode = this.nodes.find(node => node.value === startValue);
        if (!startNode) return;

        const visited = new Set();
        const queue = [startNode];

        while (queue.length > 0) {
            const currentNode = queue.shift();
            if (visited.has(currentNode.value)) continue;

            // Highlight the current node
            currentNode.color = '#f472b6'; // Change color to highlight
            highlightNode(currentNode.value); 

            // Wait briefly to visualize BFS traversal
            await new Promise(resolve => setTimeout(resolve, 500));

            // Add unvisited neighbors to the queue
            const neighbors = this.getNeighbors(currentNode.value);
            neighbors.forEach(neighborValue => {
                const neighborNode = this.nodes.find(node => node.value === neighborValue);
                if (neighborNode && !visited.has(neighborNode.value)) {
                    queue.push(neighborNode);
                }
            });

            // Mark current node as visited
            visited.add(currentNode.value);
        }

        // Reset colors of all nodes back to initial color
        this.nodes.forEach(node => node.color = this.initialColor);
    }

    getNodes() {
        return this.nodes;
    }

    getEdges() {
        return this.edges;
    }
}

export default Graph;

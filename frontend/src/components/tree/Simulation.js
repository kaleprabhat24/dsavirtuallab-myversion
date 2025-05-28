class TreeNode {
    constructor(value, x, y, color, parentValue = null) {
        this.value = value;
        this.left = null; // Left child
        this.right = null; // Right child
        this.x = x; // X coordinate for the node's position
        this.y = y; // Y coordinate for the node's position
        this.color = color; // Node color for visualization
        this.parentValue = parentValue; // Parent node's value
        this.animation = 'pop-in'; // Animation for visualization
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
        this.colors = [
            '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD',
            '#D4A5A5', '#9B6B6B', '#E0BBE4', '#957DAD', '#4B4453'
        ];
    }

    // Generate a random color for the node
    getRandomColor() {
        return this.colors[Math.floor(Math.random() * this.colors.length)];
    }

    // Calculate positions based on level and whether the node is left or right
    calculatePosition(node, isLeft, level) {
        const baseY = node.y + 18; // Increase Y for next level
        const xOffset = 40 / Math.pow(level, 0.9); // Adjust offset based on level
        const newX = isLeft ? node.x - xOffset : node.x + xOffset;

        // Limit newX to ensure it's within the view box (0 to 100)
        const limitedX = Math.max(0, Math.min(100, newX));

        return { x: limitedX, y: baseY };
    }

    insert(value) {
        const newNode = new TreeNode(value, 50, 10, this.getRandomColor()); // Start node at root position (x: 50, y: 10)
        if (this.root === null) {
            this.root = newNode;
            return;
        }

        const insertNode = (node, level) => {
            let position;
            if (value < node.value) {
                if (node.left === null) {
                    position = this.calculatePosition(node, true, level);
                    node.left = new TreeNode(value, position.x, position.y, this.getRandomColor(), node.value);
                } else {
                    insertNode(node.left, level + 1);
                }
            } else {
                if (node.right === null) {
                    position = this.calculatePosition(node, false, level);
                    node.right = new TreeNode(value, position.x, position.y, this.getRandomColor(), node.value);
                } else {
                    insertNode(node.right, level + 1);
                }
            }
        };

        insertNode(this.root, 1); // Start inserting from the root at level 1
    }

    delete(value) {
        const deleteNode = (node, value) => {
            if (!node) return null;

            if (value < node.value) {
                node.left = deleteNode(node.left, value);
            } else if (value > node.value) {
                node.right = deleteNode(node.right, value);
            } else {
                // Node to be deleted found
                if (!node.left && !node.right) {
                    return null; // No children
                } else if (!node.left) {
                    return node.right; // One child (right)
                } else if (!node.right) {
                    return node.left; // One child (left)
                }

                // Two children
                let minNode = node.right;
                while (minNode.left) {
                    minNode = minNode.left;
                }
                node.value = minNode.value;
                node.right = deleteNode(node.right, minNode.value);
            }
            return node;
        };

        this.root = deleteNode(this.root, value);
    }

    toArray() {
        const result = [];
        const traverse = (node) => {
            if (node) {
                traverse(node.left);
                result.push({
                    value: node.value,
                    x: node.x,
                    y: node.y,
                    color: node.color,
                    parentValue: node.parentValue,
                    animation: node.animation
                });
                traverse(node.right);
            }
        };
        traverse(this.root);
        return result;
    }
}

export default BinaryTree;

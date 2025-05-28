// src/components/linked-list/Simulation.js
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    toArray() {
        let current = this.head;
        const nodes = [];
        while (current !== null) {
            nodes.push(current.value);
            current = current.next;
        }
        return nodes;
    }

    insertAtHead(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    insertAtTail(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    insertAtPosition(value, position) {
        if (position === 0) {
            this.insertAtHead(value);
            return;
        }
        const newNode = new Node(value);
        let current = this.head;
        let previous = null;
        let index = 0;

        while (index < position && current !== null) {
            previous = current;
            current = current.next;
            index++;
        }

        if (current === null && previous === null) {
            console.log('Position out of bounds');
            return;
        }

        previous.next = newNode;
        newNode.next = current;
    }

    deleteFromHead() {
        if (!this.head) {
            console.log('List is empty');
            return;
        }
        this.head = this.head.next;
    }

    deleteFromTail() {
        if (!this.head) {
            console.log('List is empty');
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let current = this.head;
        while (current.next.next !== null) {
            current = current.next;
        }
        current.next = null;
    }

    deleteFromPosition(position) {
        if (!this.head) {
            console.log('List is empty');
            return;
        }
        if (position === 0) {
            this.deleteFromHead();
            return;
        }
        let current = this.head;
        let previous = null;
        let index = 0;

        while (index < position && current !== null) {
            previous = current;
            current = current.next;
            index++;
        }

        if (current === null) {
            console.log('Position out of bounds');
            return;
        }

        previous.next = current.next;
    }
}

export default SinglyLinkedList;

const _Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    find(item) { 
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }

    remove(item) { 
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }

    insertBefore(item, key) {
        // Start at the head
        let currNode = this.head;
        let prevNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== key) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking
                prevNode = currNode;
                currNode = currNode.next;
            }
        }
        // Found it
        prevNode.next = new _Node(item, currNode)
    }

    insertAfter(item, key) {
        // Start at the head
        let currNode = this.head;
        let nextNode = currNode.next;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== key) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking
                nextNode = nextNode.next;
                currNode = currNode.next;
            }
        }
        // Found it
        currNode.next = new _Node(item, nextNode);
    }

    insertAt(item, position) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        let currNode = this.head;
        let prevNode = this.head;
        let currPosition = 0;
        while (currPosition !== position) {
            if (currNode.next === null) {
                return null;
            }
            else {
                prevNode = currNode;
                currNode = currNode.next;
                currPosition++;
            }
        }
        prevNode.next = new _Node(item, currNode);
    }
}

module.exports = LinkedList;
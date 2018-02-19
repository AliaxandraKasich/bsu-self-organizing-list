class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class SelfOrganizedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insert(data) {
        var temp = new Node();
        temp.data = data;
        this.length++;
        if(this.head === null){
            this.head = temp;
            this.tail = temp;
            return;
        }
        var lastNode = this.tail;
        this.tail = temp;
        temp.prev = lastNode;
        lastNode.next = temp;
    }

    size() {
        return this.length;
    }

    at(index) {
        if(this.head === null)   return null;
        var node = this.head;
        for(var i=0; i< index; i++){
        if(node === null) return null;
          node = node.next;
        }
        return node.data;
    }

    findNode(data) {
        if(this.head === null)   return null;
        var node = this.head;
        while(node !== null){
            if(node.data === data) return node;
            node = node.next;
        }
        return null;
    }

    toArray() {
        var arr = [];
        var node = this.head;
        while(node !== null){
            arr.push(node.data);
            node = node.next;
        }
        return arr;

    }

    removeAt(index) {
        var node = this.head;
        for(var i=0; i<index; i++){
            if(node === null){
                return null;
            }
        node = node.next;
        }
        
        if (node.prev !== null)
            node.prev.next = node.next;
        else
            this.head = node.next;

        if (node.next !== null)
            node.next.prev = node.prev;
        else
            this.tail = node.prev;
        this.length--;
    }

    moveToFront(node) {
        if(this.length < 2 || this.head === node) return;

        if (node.prev !== null)
            node.prev.next = node.next;
        else
            this.head = node.next;

        if (node.next !== null)
            node.next.prev = node.prev;
        else
            this.tail = node.prev;

        var temp = this.head;
        this.head = node;

        node.next = temp;
        temp.prev = node;
    }


    reorganize(data) {
       var node = this.findNode(data);
        if (node) {
            this.moveToFront(node);
            return true;
        }
        return false;
    }

    }

module.exports = {
    SelfOrganizedList,
    Node
};
function indexOf(head, value) {
    if(head == null){
        return -1;
    }
    let next = head;
    let counter = 0;
    do{
        if(next.data === value){
            return counter;
        }

        next = next.next;
        counter++;

    }while(next != null)
    return -1;
}

function Node(data, next = null) {
    this.data = data;
    this.next = next;
}

function listFromArray(numbers) {
    let head = null;

    for(let i=0; i<numbers.length; i++){
        if(head == null){
            head = new Node(numbers[i]);
        }
        else {
            head.next= new Node(numbers[i]);
        }
    }
    return head;
}

console.log(indexOf(listFromArray([1, 2, 3, 3]), 3));

function map(head, f) {
    if(head == null){
        return null;
    }

    let root = new Node(f(head.data));
    let currentNode = head;
    let bckNode = root;

    while((currentNode=currentNode.next)!=null){
        bckNode.next = new Node(f(currentNode.data));
        bckNode = bckNode.next;
    }

    return root;
}

const a = x => x * 2
console.log(a(2));

console.log(map(new Node(1, new Node(2, new Node(3))), x => x * 2));
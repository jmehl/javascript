import { LinkedList } from '../js-data-structs/linked-list.js';

const linked_list = new LinkedList();
linked_list.addHeadNode(1);
linked_list.addTailNode(5);
linked_list.addTailNode(7);
linked_list.addTailNode(20);
linked_list.addNodeAt(10, 1);
linked_list.getListValue(2);
linked_list.deleteHeadNode();
linked_list.deleteTailNode();
linked_list.clearList();

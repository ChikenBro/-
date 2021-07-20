/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
//时间复杂度O(n) 空间复杂度O(n)
var addTwoNumbers = function(l1, l2) {
    const head = new ListNode(); //头结点
    let p1 = l1;
    let p2 = l2;
    let p3 = head;
    let temp = 0;
    while(p1 || p2){
        const val1 = p1 ? p1.val : 0;
        const val2 = p2 ? p2.val : 0;
        let sum = (val1 + val2 + temp);
        p3.next = new ListNode(sum % 10);
        temp = Math.floor(sum/10);
        if(p1) p1 = p1.next;
        if(p2) p2 = p2.next;
        p3 = p3.next;
    }
    if(temp) p3.next = new ListNode(temp);
    return head.next;
};
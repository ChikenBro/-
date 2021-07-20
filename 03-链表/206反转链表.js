/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 时间复杂度O(n) 空间复杂度O(1)
var reverseList = function(head) {
    let now = head;
    let pre = null;
    while (now) {
        //这里必须记录为now.next,如果设为now,下面now.next的修改同样也会影响着temp.next
        const temp = now.next;  
        now.next = pre;
        pre = now;
        now = temp;
    }
    return pre;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
//时间复杂度O(n) 空间复杂度O(1)
//利用快慢指针判断是否有环
var hasCycle = function(head) {
    let slow = head;
    let qck = head;
    while(slow && qck && qck.next){
        slow = slow.next;
        qck =  qck.next.next;
        if(slow === qck) return true;
    }
    return false;
};
//时间复杂度O(n) 空间复杂度O(n)
var RecentCounter = function () { //构造函数
    this.q = [];
};

/** 
 * @param {number} 
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.q.push(t);
    while (this.q[0] < t - 3000)
        this.q.shift();
    return this.q.length
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */ 
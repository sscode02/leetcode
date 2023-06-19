/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
    if (!root) return null
    let head, pre, cur
    function dfs(root) {
        if (!root) return
        if (root.left) dfs(root.left)

        debugger
        if (pre) {
            cur = root
            pre.right = cur
            cur.left = pre
            pre = cur
        } else {
            pre = root
            head = pre
        }
        if (root.right) dfs(root.right)
    }

    dfs(root)

    head.left = pre
    pre.right = head

    return head
};


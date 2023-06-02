/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
    if (!A || !B) return false
    let res = check(A, B)
    if (res) return true

    if (A.left) {
        let res = isSubStructure(A.left, B)
        if (res) return true
    }

    if (A.right) {
        let res = isSubStructure(A.right, B)
        if (res) return true
    }

    return false
};

function check(A:, B) {
    if (!B) return true
    if (!A) return false

    if (A.val !== B.val) return false
    return check(A.left, B.left) && check(A.right, B.right)
}
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

function pathSum(root: TreeNode | null, target: number): number[][] {
    const res: Array<Array<number>> = []

    function dfs(root: TreeNode | null, target: number, arr: Array<number>) {
        if (!root) return
        arr.push(root.val)
        if (!root.left && !root.right) {
            if (arr.reduce((prev, next) => prev + next) === target) {
                res.push([...arr])
            }
        }

        if (root.left) dfs(root.left, target, arr)
        if (root.right) dfs(root.right, target, arr)
        arr.pop()
    }
    dfs(root, target, [])

    return res
};


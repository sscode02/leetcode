class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function getRandomArr(nums: number): Array<number> {
    const arr: Array<number> = []
    for (let i = 0; i < nums; i++) {
        arr.push(Math.random())
    }
    return arr
}

function getLinked(values: number[]): ListNode {
    const b = [...values]
    const head = new ListNode(b.shift())
    let current = head

    for (let i = 0; i < b.length; i++) {
        current.next = new ListNode(b[i])
        current = current.next
    }

    return head
}

function convert(s: string, numRows: number): string {
  if (numRows === 1) return s
  const ret = new Array(numRows).fill('')
  let num = 0
  let flag = true
  for (let i = 0; i < s.length; i++) {
    ret[num] += s[i]

    if (num === numRows - 1) flag = false
    if (num === 0) flag = true

    if (flag) {
      num++
    } else {
      num--
    }
  }
  return ret.join('')
};
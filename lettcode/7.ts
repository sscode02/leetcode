function reverse(x: number): number {
  const s = String(x);
  const temp: string[] = [];
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "-") {
      temp.unshift("-");
    } else {
      temp.push(s[i]);
    }
  }
  if (
    Number(temp.join("")) > Math.pow(2, 31) - 1 ||
    Number(temp.join("")) < -Math.pow(2, 31)
  )
    return 0;
  return Number(temp.join(""));
}

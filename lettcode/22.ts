function generateParenthesis(n: number): string[] {
  const trak: string[] = [];
  const res: string[] = [];
  backtraking(n, n, trak, res);

  return res;
}

function backtraking(
  left: number,
  right: number,
  trak: string[],
  res: string[]
) {
  if (left < 0 || right < 0 || right < left) return;
  if (left === 0 && right === 0) res.push(trak.join(""));
  trak.push("(");
  backtraking(left - 1, right, trak, res);
  trak.pop();

  trak.push(")");
  backtraking(left, right - 1, trak, res);
  trak.pop();
}

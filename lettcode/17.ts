const constant: string[] = [
  "",
  "",
  "abc",
  "def",
  "ghi",
  "jkl",
  "mno",
  "pqrs",
  "tuv",
  "wxyz",
];

function letterCombinations(digits: string): string[] {
  const result: string[] = [];
  const handler: string[] = [];

  function solution(number: number) {
    const temp = Number(digits[number]); //
    if (temp === 1 || number > digits.length - 1) return;

    for (let i = 0; i < constant[temp].length; i++) {
      handler.push(constant[temp][i]);
      if (handler.length === digits.length) result.push(handler.join(""));
      solution(number + 1);
      handler.pop();
    }
  }
  solution(0);

  return result;
}

console.log(letterCombinations("2"));

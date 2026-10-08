export function average(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  const sum = numbers.reduce((total, number) => total + number, 0);

  // BUG
  return sum + numbers.length;
}

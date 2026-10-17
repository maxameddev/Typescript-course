// 1
function fullName(first: string, last: string): string {
  return first + " " + last;
}

// 2
function registerUser(username: string, isAdmin?: boolean, language: string = "en") {
  console.log(username, isAdmin, language);
}

registerUser("ali");

// 3
function average(...scores: number[]): number {
  let total = 0;
  for (const score of scores) {
    total += score;
  }
  return total / scores.length;
}

console.log(average(80, 90, 70));
console.log(average(60, 75, 85, 95));
console.log(average(50, 60, 70, 80, 90));

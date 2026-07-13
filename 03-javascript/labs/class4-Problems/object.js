/****
 * Crearte a fn , Such that the output is based on the category
 * const data  = [
 *  {
 *    name: "Alice", score:92
 *  },{
 *    name: "Bob", score:80
 *  },{
 *    name: :Charlie, score:60
 *  }
 * ]
 */
const input = [
  { name: "Alice", score: 92 },
  { name: "James", score: 90 },
  { name: "Bob", score: 80 },
  { name: "Charlie", score: 75 },
  { name: "john", score: 59 },
];
const catogerizeStudents = (input) => {
  const category = {};
  input.forEach((element) => {
    if (element.score >= 90) {
      if (!category["A"]) {
        category["A"] = [];
      }
      category["A"].push(element.name);
    } else if (element.score < 90 && element.score >= 75) {
      if (!category["B"]) {
        category["B"] = [];
      }
      category["B"].push(element.name);
    } else {
      if (!category["C"]) {
        category["C"] = [];
      }
      category["C"].push(element.name);
    }
  });
  return category;
};

console.log(catogerizeStudents(input));

/***
 *
 * Reverse words in a sentence
 * input : Hello World
 * output: World Hello
 */
let sentenceToProvide = "Hello World!";
const reverseWords = (sentnece) => {
  const reversedWords = sentnece.split(" ").reverse().join(" ");
  console.log(reversedWords);
  return reversedWords;
};

reverseWords(sentenceToProvide);

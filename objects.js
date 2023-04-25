'use strict';

// 1. countWords
function countWords(phrase) {
  // Replace this with your code
}

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  // Replace this with your code'use strict';

// 1. countWords
function countWords(phrase) {
  const wordCounts = {}

  for (const word of phrase.split(' ')) {
    if (word in wordCounts) {
      wordCounts[word] += 1;
    } else {
      wordCounts[word] = 1
    }
  }

  return wordCounts
}

// console.log(countWords('this is this is a test'))

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  const melons = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  }  

  for (const melonPrice in melons) {
    if (price == melonPrice) {
      return melons[price].sort()
    }
  }
}

// console.log(getMelonsAtPrice(2.50))
// console.log(getMelonsAtPrice(3.25))
}

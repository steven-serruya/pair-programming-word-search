const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  const horizontalReversedJoin = letters.map(ls => ls.reverse().join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  for (const l of horizontalReversedJoin) {
    if (l.includes(word)) return true;
  }

  return false;
};

module.exports = wordSearch;
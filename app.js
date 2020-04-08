function shuffelWord(word) {
  var shuffledWord = "";
  word = word.split("");
  while (word.length > 0) {
    shuffledWord += word.splice((word.length * Math.random()) << 0, 1);
  }
  return shuffledWord;
}

function removeSpace(keyword) {
  return keyword.replace(" ", "");
}

function verifyOptions(keyword, space, shuffle) {
  if (space == false) {
    return (keyword = removeSpace(keyword));
  } else if (shuffle == true) {
    return (keyword = shuffelWord(keyword));
  } else {
    return (keyword = keywoed);
  }
}

function loremKeyword(keyword, space = true, shuffle = false) {
  keyword = verifyOptions(keyword, space, shuffle);
  return faker.lorem.word() + keyword;
}

function addWordBeforeKeyword(keyword, space = true, shuffle = false) {
  keyword = verifyOptions(keyword, space, shuffle);
  return faker.name.firstName() + keyword;
}

function addWordAfterKeyword(keyword, space = true, shuffle = false) {
  keyword = verifyOptions(keyword, space, shuffle);
  return keyword + faker.name.lastName();
}

function keywordAlphaNum(keyword, space = true, shuffle = false) {
  keyword = verifyOptions(keyword, space, shuffle);
  return keyword + faker.random.alphaNumeric();
}

function keywordNumber(keyword, space = true, shuffle = false) {
  keyword = verifyOptions(keyword, space, shuffle);
  return keyword + faker.random.number();
}

function prefixKeyword(keyword, space = true, shuffle = false) {
  keyword = verifyOptions(keyword, space, shuffle);
  return faker.name.prefix() + "." + keyword + faker.random.word();
}
function keywordSuffix(keyword, space = true, shuffle = false) {
  keyword = verifyOptions(keyword, space, shuffle);
  return keyword + faker.name.suffix();
}

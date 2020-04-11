function randomWord(keyword = false,length) {
   let result = '';
   let characters;
   if(keyword == false)
   {
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   }
   else
   {
     characters = keyword;
   }
   let charactersLength = characters.length;
   for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}


function shuffelWord(word) {
  var shuffledWord = "";
  word = word.split("");
  while (word.length > 0) {
    shuffledWord += word.splice((word.length * Math.random()) << 0, 1);
  }
  return shuffledWord;
}

function removeSpace(keyword) {
  // return keyword.replace(" ", "");
  return keyword.replace(/\s/g, "");
  // return keyword;
}

function verifyOptions(keyword, space, shuffle) {
  if (space == true) {
    keyword = removeSpace(keyword);
  } else {
    keyword = keyword;
  }
  if (shuffle == true) {
    keyword = shuffelWord(keyword);
  } else {
    keyword = keyword;
  }
  return keyword;
}

function loremKeyword(keyword, space, shuffle) {
  keyword = verifyOptions(faker.lorem.word() + keyword, space, shuffle);
  return keyword;
}

function addWordBeforeKeyword(keyword, space, shuffle) {
  keyword = verifyOptions(faker.name.firstName() + keyword, space, shuffle);
  return keyword;
}

function addWordAfterKeyword(keyword, space, shuffle) {
  keyword = verifyOptions(keyword + faker.name.lastName(), space, shuffle);
  return keyword;
}

function keywordAlphaNum(keyword, space, shuffle) {
  keyword = verifyOptions(
    keyword + faker.random.alphaNumeric(),
    space,
    shuffle
  );
  return keyword;
}

function keywordNumber(keyword, space, shuffle) {
  keyword = verifyOptions(keyword + faker.random.number(), space, shuffle);
  return keyword;
}

function prefixKeyword(keyword, space, shuffle) {
  keyword = verifyOptions(
    // faker.name.prefix() + "." + keyword + faker.random.word(),
    faker.name.prefix() + keyword,
    space,
    shuffle
  );
  return keyword;
}
function keywordSuffix(keyword, space, shuffle) {
  keyword = verifyOptions(keyword + faker.name.suffix(), space, shuffle);
  return keyword;
}

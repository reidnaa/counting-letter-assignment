function countLetters(fullString) {
  var letters = {};

  //remove whitespace
  var noWhiteSpace = fullString.replace(/\s/g,'');
  //create array from countLetter (split)?
  var newThing = noWhiteSpace.split('');


  //create object keys from array
  //count intaces of say letter and add to key values
  for (i=0; i < newThing.length; i++) {
    if (letters[newThing[i]] === undefined) {
      letters[newThing[i]] = 1;
    } else {
      letters[newThing[i]] += 1;
    }
  }
return letters;
}

console.log(countLetters("lighthouse in the house"));
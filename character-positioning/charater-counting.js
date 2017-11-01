function countLetters(fullString) {
  var letters = {};

  //remove whitespace
  var lowerCase = fullString.toLowerCase();
  //create array from countLetter (split)?
  var newThing = lowerCase.split('');


  //create object keys from array
  //add character indices to key values.
  //If character occurs more then once create array of indices

  for (i=0; i < newThing.length; i++) {
    //console.log(letters[newThing[i]]);
    if (newThing[i] === " ") {
      continue;
    } else if (letters[newThing[i]] === undefined) {
      letters[newThing[i]] = [i];
    }
    else {
      //add another i value to array
     letters[newThing[i]].push(i);
    }
  }
return letters;
}

console.log(countLetters("lighthouse in the house"));
// find indidices of all data with length > 3

const data = [];

data.indexOf(data[0]); // 0

Object.keys(data[0]).length;

let lengthGreaterThanThree = data
  .map((x) => Object.keys(x).length)
  .filter((y) => y > 3);

function assignLength(inputData) {
  var objectLength,
    accum = [];
  for (var i = 0; i < inputData.length; i++) {
    objectLength = Object.keys(inputData[i]).length;
    data[i].length = objectLength;
    accum.push(inputData[i]);
  }
  return accum;
}

var greaterThanThree = data.map((x) => x.length > 3);

function ifTrueGetIndex(inputArray) {
  var indidicesTrue = [];

  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === true) {
      indidicesTrue.push(i);
    } else {
      console.log("index not greater than length three(3)");
    }
  }
  return indidicesTrue;
}

// I want to find all the data that are greater than length 3

// First I'll try assinging a length to each data

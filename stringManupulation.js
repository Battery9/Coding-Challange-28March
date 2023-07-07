function manipulateString(str, callback) {
    let newStr = str.toUpperCase();
    callback(newStr);
  }

function logString(str) {
    console.log("The manipulated string is:",str)
}
manipulateString("hello world", logString);
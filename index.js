function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log("HELLO")
}
function logWhisper(string) {
  console.log("hello")
}

var uppercase = "HELLO!"

uppercase.toUpperCase() === uppercase

var lowercase = 'hello!'

lowercase.toLowerCase() === lowercase

var mixedCase = 'Hi there!'

mixedCase.toLowerCase() === mixedCase

mixedCase.toUpperCase() === mixedCase

function sayHiToGrandma("I can't hear you!") {
 if (`string` === lowercase) {
 return("I can't hear you!")
 } else if (`string` === uppercase) {
  return("YES INDEED!")
} 
}
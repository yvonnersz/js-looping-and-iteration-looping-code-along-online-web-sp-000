// Code your solutions in this file

function writeCards(names, event) {
  for (let i=0; i<names.length, i++) {
    console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");

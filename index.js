// Code your solutions in this file

const people = ["Lisa", "Kaitlin", "Jan"];
const event = "birthday";

function writeCards(people, event) {
  for (let i=0; i<people.length; i++) {
    console.log(`Thank you, ${people[i]}, for the wonderful ${event} gift!`);
  }
}

writeCards(people, event);

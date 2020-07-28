// Code your solutions in this file

const people = ["Lisa", "Kaitlin", "Jan"];
const event = "birthday";

function writeCards(people, event) {
  array = []
  for (let i=0; i<people.length; i++) {
    array.push(`Thank you, ${people[i]}, for the wonderful ${event} gift!`);
  }
}

writeCards(people, event);

const fs = require('fs');
const genders = ['F', 'M'];
const maleNames = ['Piotr', 'Sebastian', 'Grzegorz', 'Bartosz'];
const femaleNames = ['Barbara', 'Joanna', 'Anna', 'Ewelina'];
const lastNames = ['Nowak', 'Kowalski', 'Krawczyk', 'Pikuta'];
let people = [];

function randChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

for (i=0; i<21; i++) {
    const obj = {};
    obj.genders = randChoice(genders);
    if (obj.genders === 'F') {
        obj.femaleNames = randChoice(femaleNames);
    } else if (obj.genders === 'M') {
        obj.maleNames = randChoice(maleNames);
    }

    const randLastName = () => {
        lastNames[Math.floor(Math.random() * lastNames.length)];
    }
    obj.lastNames = randLastName(lastNames);
    obj.age = Math.floor(Math.random() * 51 + 18);
	people.push(obj); 
}

fs.writeFile('people.json', JSON.stringify(people), err => {
	if (err) throw err;
	console.log('The file has been saved!');
});
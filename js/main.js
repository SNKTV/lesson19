// Завдання 1

let age = prompt('Enter your age', '');

if(age <= 17){
    alert('Do you study at school?');
} else if (17 < age && age < 25){
    alert('Do you study at university?');
} else if (age >= 25 && age < 60){
    alert('Do you have a job?');
} else {
    alert('What are you doing?');
}

// Завдання 2

let value = prompt('Enter the display property:')
switch(value){
    case 'block':
        alert('Display: block;');
        break;
    case 'flex':
        alert('Display: flex;');
        break;
    case 'grid':
        alert('Display: grid;');
        break;
    case 'inline':
        alert('Display: inline;');
        break;
    case 'none':
        alert('Display: none;');
        break;
    default:
        alert('Display: inline-block;');
}

// Завдання 3

let number = prompt('Enter the number:');

number = +number;

while (isNaN(+number)) {

    number = prompt('Your number is incorect, please enter corect number');
}
alert(`Number ${+number} times 12 equals: ${+number * 12}`);

// Завдання 4

for (let i = 2; i <= 50; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
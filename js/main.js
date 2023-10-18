let array = [];

const arrayLength = parseInt(prompt('Write the length of array:'));

for (let someNumber = 0; someNumber < arrayLength; someNumber++) {
  const element = parseInt(prompt(`Enter your element ${someNumber + 1}:`));
  array.push(element);
}

array.sort((a, b) => a - b);

array.splice(1, 3);

document.getElementById('output').innerHTML = 'Array: ' + array.join(', ');
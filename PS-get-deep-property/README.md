# PS-get-deep-property exercise

## Instructions

- Using vanilla javascript, create a function that gets the value of a property at a given path
- Example:
  - If given the object: {person: {name: {first: 'FirstName', middleInitial: 'I', lastName: 'LastName''}}}
  - And given the path: 'person.name.lastName'
  - The output would be: 'LastName'
- After you complete the exercise, provide any notes on your code below such as how to run your example


Sample ->

//Method to implement
function getDeepProperty(obj, path) {
// Her Code goes here
}

const dataObject = {person: {name: {first: 'FirstName', middleInitial: 'I', lastName: 'LastName''}}}

const lastName = getDeepProperty(dataObject, ‘person.name.lastName’);

console.log(lastName); // ‘LastName’


## Candidate Notes:

Open index.html
Choose a vehicle make from the dropdown
Click each button to get the value from the object.

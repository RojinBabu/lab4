function checkMultipleOfFive() {
  let number = prompt("Enter a number:");
  number = parseInt(number);

  if (isNaN(number)) {
      alert("Please enter a valid number.");
  } else if (number % 5 === 0) {
      alert(`${number} is a multiple of 5.`);
  } else {
      alert(`${number} is not a multiple of 5.`);
  }
}

function fizzBuzz() {
    const outputDiv = document.getElementById("fizzbuzzOutput");
    outputDiv.innerHTML = ""; // Clear previous output

    for (let i = 1; i <= 100; i++) {
        let result;

        if (i % 3 === 0 && i % 5 === 0) {
            result = "FizzBuzz";
        } else if (i % 3 === 0) {
            result = "Fizz";
        } else if (i % 5 === 0) {
            result = "Buzz";
        } else {
            result = i;
        }

        // Create a paragraph element for each result
        const paragraph = document.createElement("p");
        paragraph.textContent = result;
        outputDiv.appendChild(paragraph);
    }
}

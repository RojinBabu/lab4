function getGrade() {
    let score = prompt("Enter the student's score (0-100):");
    score = parseInt(score);

    if (isNaN(score) || score < 0 || score > 100) {
        alert("Please enter a valid score between 0 and 100.");
    } else if (score >= 80 && score <= 100) {
        alert("Grade: A");
    } else if (score >= 70 && score <= 79) {
        alert("Grade: B");
    } else if (score >= 60 && score <= 69) {
        alert("Grade: C");
    } else if (score >= 50 && score <= 59) {
        alert("Grade: D");
    } else {
        alert("Grade: F");
    }
}

// A program that prompts students to input their marks for grading;
// Using conditional "if" and "else if" statements to output grade based on marks input;
let marks = 0 <= 100;
let studentMarks = prompt(parseInt(marks));
if (79 < studentMarks) {
    console.log("A");
}
else if(studentMarks <= 79 && studentMarks >= 60) {
    console.log("B")
}
else if(studentMarks <= 59 && studentMarks >= 50) {
    console.log("C");
}
else if(studentMarks <= 49 && studentMarks >= 40) {
    console.log("D");
}
else if (0 <= studentMarks && studentMarks <= 39){
    console.log("E");
}
// if the user/student a mark that spills over the provided mark range (0-100), he/she will be prompted to input a mark 
// that falls within the range 
else {
  console.log("Invalid!!, Input correct Marks");
}

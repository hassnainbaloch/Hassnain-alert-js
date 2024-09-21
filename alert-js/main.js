// var msg1 = prompt("enter you 1st name");
// var msg3 = Number(msg1);
// var msg2 = prompt("enter you 2nd number");
// var msg4 = Number(msg2);
// var ans =(msg3 + msg4);
// alert('you answer is  ${msg3+msg4}!');



// var x = prompt("what is you name");
// if (x === "hassnain");
// {
//     alert("your answer is right");
// }


var num1 = Number(prompt("enter the first number"));
var num2 = Number(prompt("enter the second number"));
var operater = prompt("enter an operate (+ ,- ,* ,/ ):");

var result;
if (operater === "+")
{
    result = num1 + num2;
}
else if (operater === "-")
{
    result = num1 - num2;
}
else if (operater === "*")
{
    result = num1 * num2;
}
else if (operater === "/")
    {
        result = num1 / num2;
    }
else{
    result ="invalid operator. please enter one of + , -, *, / .";
}
alert("Result = "+ result);
// var num1 = Number(prompt("Enter the first number")); 
// var num2 = Number(prompt("Enter the second number"));
// var operate = prompt("Enter an operator (+, -, *, /):");

// var result;
// if (operate === "+") {
//     result = num1 + num2;
// }
// else if (operate === "-") {
//     result = num1 - num2;
// }
// else if (operate === "*") {
//     result = num1 * num2;  // Fix: num1 * num2
// }
// else if (operate === "/") {
//     result = num1 / num2;  // Fix: num1 / num2
// }
// else {
//     result = "Invalid operator. Please enter one of +, -, *, /.";
// }
// alert("Result = " + result);

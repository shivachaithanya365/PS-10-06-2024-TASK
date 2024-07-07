/*Write a program to rotate the array to right     input:[2,6,12,50] rotationCountInput2:2
output: [12,50,2,6]*/

var input1 = prompt("Enter numbers seperating with spaces : ").split(" ").map(Number);
var input2 = +prompt("Enter number of rotations : ");
var origInput1 = input1.slice();
for (let i = 0; i < input2; i++) {
        input1.unshift(input1.pop());
}

console.log(`Rotation of input1 (${origInput1}) to input2 (${input2}) times is : ${input1}`);
document.write(`<h3>Rotation of input1 (${origInput1}) to input2 (${input2}) times is : ${input1}</h3><hr>`)

/*Write a program to find the count of palindromes in the given array.
input:[22,122,202,138,2]  output:2*/

var input = prompt("Enter numbers seperating with spaces : ").split(" ").map(Number);
var count = 0;
for (let i of input) {
        var str = String(i);
        if (str.length > 1)
                var revStr = str.split("").reverse().join("");
        if (str === revStr) {
                count++;
        }
}
console.log(`No. of palindromes in input(${input}) is : ${count}`);
document.write(`<h3>No. of palindromes in input(${input}) is : ${count}</h3><hr>`);

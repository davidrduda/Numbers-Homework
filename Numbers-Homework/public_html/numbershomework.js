var numArray = [];
while (numArray.length < 3){
    numArray.push(Number(prompt("Enter a number.")));
}

var smallest = numArray[0];
for (i = 0; i < numArray.length; i++)
    if (numArray[i] < smallest){
        smallest = numArray[i];
}
document.getElementById("smallest").innerHTML = "Total smallest number is " + smallest;

var largest = numArray[0];
for (i = 0; i < numArray.length; i++)
    if (numArray[i] > largest){
        largest = numArray[i];
    }
document.getElementById("largest").innerHTML = "Total largest number is " + largest;

var total = 0;
for (i = 0; i < numArray.length; i++)
    total = total + numArray[i];
document.getElementById("total").innerHTML = "Total total of the numbers is " + total;
var average = total/numArray.length;

document.getElementById("average").innerHTML = "Total average of the number is " + average;
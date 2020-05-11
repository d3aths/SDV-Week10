console.log(Math.floor(0.5))
console.log(Math.floor(1.84))
console.log(Math.floor(2.89873))
//math.floor rounds the decimals DOWN to the nearest whole number

console.log(Math.round(0.4))
console.log(Math.round(0.6))
console.log(Math.round(1.5))
//math.round just rounds to the nearest integer

console.log(Math.ceil(2.9898))
console.log(Math.ceil(1.5))
console.log(Math.ceil(0.2))
//math.ceil rounds UP to the nearest integer

console.log(Math.random() * 100)

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
  }
  console.log(getRandomInt(1000));
  //uses math.floor with the parameter of math.random, which gives a random number
  //using the * math.floor method as the argument of math.random, also rounds that number
  //we change the number of the getrandomint function in the console log to match the maximum number we want to generate
 //could also use math.round instead of floor

 
console.log("Celeste".charAt(1))
//returns the value of the index 1 in the string
console.log("Celeste".substring(1,4))
//returns the values of the indexes of 1 up until 4
console.log("Celeste".substring(4))
//if no 2nd parameter is declared, returns the values of the index from 4 onwards

console.log("012345".substr(1,3))
//returns value of index starting at 1, 2nd argument is how many characters to use
console.log("012345".substring(1,3))
//just returns indexes 1-3


var a = "aaa"
var b = "ab"
console.log(a < b)
//is a less than b? true because the values of the string are lower in sorting order
console.log(b < a)
//is b less than a? false because ab is greater in sorting order than aa no matter how many characters there are

function findInString(x, y)
{
    return x.indexOf(y) !== -1
    //looks in the first parameter for a character you declare in the second
    //making sure it doesnt first equal to -1(duno really what for)
}
console.log(findInString("Celeste", "z"))
//looking in string celeste for character z

const string = "Im trying to make this code smaller"
let find = string.indexOf("i")
//find holds the number of times it looks for "i" in the string variable
let count = 0
//counds each time it cycles through and finds it
while (find !== -1)
//while find isn't -1
{
 count++; find = string.indexOf("i", find + 1)
 //counts each time it looks for i, also increases find by 1 each time it does
}
console.log(count)
//this doesnt really make sense to me, what is the purpose of the find? when i console log it, it shows -1 so i just ?????
//no idea how to make it smaller either. anything i tried just breaks it
//missed out on the next 3 parts of explantions since i was trying to do this

var Obj = {}
//this is how to declare an object
var arr = [1,2,3,4]

Obj.array = arr
//declares an array object and assigns whats in arr

console.log(Obj)
//shows our new array object

//object.propertyName
//object['propertyName']

Obj.title = "SDV"
//gives our obj a title
console.log(Obj)

function ExampleClass()
{
    this.firstName = "Celeste"
    this.lastName = function()
    {
        console.log(this.firstName)
    }

    var test = new ExampleClass()
    test.sayMyName() //constructor
}
//?????? @ all this



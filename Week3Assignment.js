//Question 1a: sets array, subtracts the first value in the array and last value and prints results
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

function firstLast(){ //names function
    console.log(ages[ages.length-1] - ages[0]); // prints the results of the array "ages" by subtracting the last element of the array to the first element of the array
}
    firstLast();

//Question 1b: adds a new value to the array and prints.
    ages.push(35); //adds new value to the array using .push method
    console.log(ages); // prints new array with added value


//Question 1c: loop array then find the average

function averageAges(){ //sets function

    let sum = 0;
    let count = ages.length; //sets count to number of items in array using length property

    for (i=0; i<count; i++){ //creates for loop to run a count/average 
    sum +=ages[i];  // adds the generic sum =0 to the age from each index
    }
    console.log(sum/i);// prints the sum divided by the index
    }
    averageAges();

//Question 2a list names in an array, calculate the names into individual letters, using a loop to calculate the average of elements

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]; //sets array to names
let sum = 0;

for (let i = 0; i < names.length; i++){ //creates for loop using length method to count elements in string to give average
        sum = sum + names[i].length; //adds the sum to entire array
        console.log(names[i]); //prints the names as indices 
}
console.log (sum); //prints number of letters

averageOfNames = sum/names.length; //calcuates the average

console.log(averageOfNames); //prints average


//Question 2b uses another loop to concatenate all the names together with spaces
let concatName = ("");
for (let i = 0; i <names.length; i++){ //for loop to iterate names
    concatName += names[i] + (" "); //concatenation of names using 'i' as an index reference
}
    console.log(concatName);// print results

//Question 3 how to access the last element of any array

let towns = ["Gallatin, TN", "Hendersonville, TN", "Donelson, TN"]; //set array to "towns"

const finalElement = towns[2]; // sets the contant and asks the result to list the third element in the array
console.log (towns[2]); //prints third element in the array


//Question 4 how to access the first element of any array

let lakes = ["Old Hickory Lake", "Dale Hollow Lake", "Cedar Hill Lake", "Cumberland Lake"]; // sets array to "lakes"

const firstElement = lakes[0]; // sets the constant and asks the result to list the first element in the array
console.log (lakes[0]); //prints first element in the array

//Question 5 create a new array called NameLengths; write a loop over the previously created names array and add length of each name to the nameLength array

let nameLengths =[]; // sets nameLengths array to zero/blank

for(let i=0;i < names.length;i++){ //uses for loop to interloop the names array 
    nameLengths.push(names[i].length); //statement requests to calculate the "length" or count of each indices (names) and push the results/numbers to the new array nameLengths
}
console.log (nameLengths);// prints results for new array nameLengths

//Question 6 write loop to iterate over nameLengths array and cacluate the sum of all elements in the array

let sumNum =0; //sets sum of all elements to zero

for (let i =0; i < nameLengths.length; i++){ // creates for loop to loop through the count of each index
    sumNum = sumNum + nameLengths[i]; // calculates the total of the indices/elements
}
console.log (sumNum); //prints total

//Question 7 write a function that takes two parameteres (word & n) as arguements and returns concatenated to itself 'n' number of times

function newFunction (word, n){ // sets parameters inside function
    let multiplier = ""; // sets our empty variable
    for (let i =0; i <n; i++) // creates for loop to iterate in increments
    multiplier += word 
    return multiplier;
}
    console.log (newFunction ("Dude", 5));// prints our word/phrase five times

//Question 8 write a function that takes two parementers, firstName & lastName and returns fullName

function fullName (firstName, lastName){ //lists the function and sets parameters
    return firstName + " " + lastName; //statement to return with space between firstname and lastname
}
console.log (fullName("Josh", "Gross")); //print function fullName + inputs

//Question 9 Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

let alpha = [66,85,257,100000]; //sets array
let omega = [389,322,1,4];
let sum1 = 0;

function totalNumberTrue(_array) { // lists function sets parameter
    for (let i =0; i < _array.length; i++) // for loop to itereate array
        sum1 += _array[i]; 
            if (sum1 >100){ 
                return true;
            }else{
                return false;
            }
        }
        console.log (totalNumberTrue(omega));

//Question 10 write a function that takes an array of numebrs an returns the average of all the elements in the array

let baskets = [1,2,3,4,5,6];
let hampers = 0;

function averageOfContainers(array){
    for (let  i = 0; i <array.length; i++)
        hampers = hampers + array[i];
        return hampers / array.length;
}
        console.log(averageOfContainers(baskets));

//Question 11 write a function that takes two array of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array
    let roses= [30,3,99,3];
    let rosesSum = 0;
    let lillies= [2,2,2,2,2,2];
    let lilliesSum = 0;
    let rosesAverage = 0;
    let lilliesAverage = 0;

   function averageOfArray (arr3, arr4){
        for (i =0; i <roses.length; i++){
            rosesSum = rosesSum +roses[i];
        }
        console.log (rosesSum);
        for (i =0; i <lillies.length; i++){
            lilliesSum = lilliesSum + lillies[i];
        }
        console.log (lilliesSum);
   }  
    

//Question 12 Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

   function willBuyDrink(isHotOuside, moneyInPocket){ // set function with a boolean , logical and, greater than to evaluate parameters
        if (isHotOuside == true && moneyInPocket > 10.50){ //use if else statement to evaluate
            console.log(true);
        }else{
            console.log(false);
        }
        }
   willBuyDrink (true, 10); //checks if function evaluates


   // Question 13 Create your own function, I want to know if the oven is preheated

   let ovenIsPreheated= 360;
   let currentTemp = 360;

   function bakePizza (){
        if (ovenIsPreheated <= currentTemp){
        return true;
        }else{
        return false;
        }
    }
    console.log(bakePizza());

/* CHALLENGE #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
bo — 07/09/2023 6:09 PM
take Coding_practice
mkdir Coding_practice
bo — 07/09/2023 6:22 PM
/* CHALLENGE #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall. */

/* 

JavaScript Fundamentals – Part 1

LECTURE: Values and Variables
Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)
Log their values to the console

LECTURE: Data Types
Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
Log the types of 'isIsland', 'population', 'country' and 'language'
to the console

LECTURE: let, const and var
Set the value of 'language' to the language spoken where you live (some
countries have multiple languages, but just choose one)
Think about which variables should be const variables (which values will never
change, and which might change?). Then, change these variables to const.
Try to change one of the changed variables now, and observe what happens


LECTURE: Basic Operators
If your country split in half, and each half would contain half the population,
then how many people would live in each half?
Increase the population of your country by 1 and log the result to the console
Finland has a population of 6 million. Does your country have more people than
Finland?
The average population of a country is 33 million people. Does your country
have less people than the average country?
Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese'

LECTURE: Strings and Template Literals
Recreate the 'description' variable from the last assignment, this time
using the template literal syntax

LECTURE: Taking Decisions: if / else Statements
If your country's population is greater that 33 million, log a string like this to the
console: 'Portugal's population is above average'. Otherwise, log a string like
'Portugal's population is 22 million below average' (the 22 is the average of 33
minus the country's population)
After checking the result, change the population temporarily to 13 and then to
See the different results, and set the population back to original

LECTURE: Type Conversion and Coercion
Predict the result of these 5 operations without executing them:
'9' - '5';
'19' - '13' + '17';
'19' - '13' + 17;
'123' < 57;
5 + 6 + '4' + 9 - 4 - 2;
Execute the operations to check if you were right

*/

/* LECTURE: Values and Variables
Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)
Log their values to the console. */

let country = "United States"
let Continent = "North America"
const Population = "331.9"

console.log (country)
console.log (continent)
console.log (Population)

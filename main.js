// Exercise 1
// Reescribe el código para usar destructuring en vez de asignar cada variable individualmente.

 let item = ["Egg", 0.25, 12];
 let [name,price,quantity] = item;

 console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`);

// Exercise 2
// Reescribe el código para asignar a cada variable el número correcto.

 let numbers = [3, 5, 4, 2, 6, 1];
 let [one, two, three, four, five, six] = numbers;

 console.log(`One: ${six}, Two: ${four}, Three: ${one}, Four: ${three}, Five: ${two}, Six: ${five}`);

// Exercise 3
// Tenemos el objeto user. Desestructura sus propiedades en las variables name, age y isAdmin (esta última no existe, tendrás que crear un valor predeterminado false).


 let user = { name1: "John", years: 30 };

 let {name1: name1, years: age, isAdmin = false} = user;

 console.log(name1); // John
 console.log(age); // 30
 console.log(isAdmin); // false

// Exercise 4
// Reescribe el código para desestructurar el array.

 let person = [12, "Chris", "Owen"];

 let [age2, firstName, lastName2] = person;

 console.log (`Person - Age: ${age}, Name: ${firstName} ${lastName2}`);

// Exercise 5
// Reescribe el código para usar desestructuring, teniendo en cuenta que no debes crear ninguna variable vacía:

 let person1 = ["Chris", 12, "Owen"];

 let [firstName1, ,lastName3] = person1;

 console.log(`Name: ${firstName1} ${lastName3}`);

// Exercise 6
// Desestructura el último elemento del array.

 const students = ['Christina', 'Jon', 'Alexandare'];

 const [, , lastName] = students;

 console.log(lastName);

// Exercise 7
// Usando destructuring, obtén sólo los nombres de los arrays dentro del array.

 const moreStudents = [
 	'Chris',
 	['Ahmad', 'Antigoni'],
 	['Toby', 'Sam']
 ];

 const [student1, [student2, student3], [student4, student5]] = moreStudents;

console.log(student2, student3, student4, student5);
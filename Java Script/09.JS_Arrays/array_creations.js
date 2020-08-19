//1. creating an array as a literal
let courses = ['UI Technologies', 'Core Java', 'Adv Java', 'ReactJS', 'Angular'];
console.log(`No of courses = ${courses.length}`);
console.log(courses)
console.log(`${courses}`)

//2. create an array using "new" operator
let names = new Array();
console.log('No of Participants = ' + names.length);
names[0] = 'Anil';
names[1] = 'Sunil';
names[2] = 'Ram';
names[3] = 'Rajesh';
console.log('No of Participants = ' + names.length);
console.log(`${names}`)
names[9] = 'Ravi'
console.log('No of Participants = ' + names.length);
console.log(`${names}`)

//3. create an array using constructor
let marks = new Array(90, 56, 98, 74, 80)
console.log(`No of Subjects = ${marks.length}`)
console.log(`Type of Array = ${typeof marks}`)

//array with mixed content
let data = [10, 20, 12.3, 12n, 'Java Script', true, { firstName: 'Sunil', lastName: 'Joseph' }, ['HTML', 'CSS', 'Java Script']]
console.log('Size of Array = '+ data.length);

console.log(data)

console.log(data[7][1]) //CSS
console.log(data[6].firstName) //Sunil
console.log(data[6]['lastName']) //Joseph

console.log(`------- array iteration ------`)
for (let content of data) {
    console.log(content + ' - ' + typeof(content))
}

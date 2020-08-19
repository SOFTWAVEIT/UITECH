//create an array to store the marks of a student using array literal concept
let marks = [98,95,76,82,73,90];
console.log(marks);
console.log('No of Subjects = '+ marks.length);
console.log(`No of Subjects = ${marks.length}`);
console.log(`Data Type of marks = ${typeof(marks)}`);

//get the content of an existing index of an array
console.log('Mark for Subject-3 = '+ marks[2]);

//access a non-existing index of an array
console.log(`Mark for Subject-10 = ${marks[9]}`);

/*-- array iterations --*/
console.log(`---- array iteration using a for loop ----`)
for(let i=0;i<marks.length;i++)
{
 console.log(`Mark for Subject-${i+1} = ${marks[i]}`);   
}

console.log(`---- array iteration using for...in loop ----`)
for(let index in marks)
{ 
 console.log(`Mark for Subject-${Number(index)+1} = ${marks[index]}`);   
}

console.log(`---- array iteration using for...of loop ----`);
for(let mark of marks)
{
 console.log(mark)   
}
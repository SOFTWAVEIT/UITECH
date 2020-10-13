export let greetings = (name)=>{
    document.querySelector('#result').innerText = 'Welcome, '+name;
}

export class Person{
    constructor(fname,lname){
        console.log(`-- inside Person constructor`);
        this.firstName = fname;
        this.lastName = lname;
    }
    getDetails(){
        console.log(`First Name: ${this.firstName}\nLastName: ${this.lastName}\n`)
    }
}
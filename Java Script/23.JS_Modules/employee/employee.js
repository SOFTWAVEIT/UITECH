import {Person} from '../script.js'
export class Employee extends Person{
    constructor(fname, lname, sal){
        console.log(`-- inside Employee constructor`)
        super(fname,lname); //calls constructor in super class
        this.salary = sal;
    }
    getDetails(){
        console.log(`First Name: ${this.firstName}\nLastName: ${this.lastName}\nSalary: ${this.salary}`)

        super.getDetails();
    }                
}
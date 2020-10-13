import {greetings} from './script.js'
import {Employee} from './employee/employee.js'

let name = 'Sachin';
greetings(name);

let emp = new Employee('Anil','Kumar',25000);
emp.getDetails();
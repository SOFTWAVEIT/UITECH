let today = new Date()  //object of Date (a predefined class of JS)
console.log(today)

let day = today.getDay() //0-Sunday | 6-Saturday
console.log(day)

let day_name = ''

switch (day) {
    case 0:
        day_name = 'SUNDAY'
        break;
    case 1:
        day_name = 'MONDAY'
        break;
    case 2:
        day_name = 'TUESDAY'
        break;
    case 3:
        day_name = 'WEDNESDAY'
        break;
    case 4:
        day_name = 'THURSDAY'
        break;
    case 5:
        day_name = 'FRIDAY'
        break;
    case 6:
        day_name = 'SATURDAY'
        break;
    default:
        day_name = 'INVALID DAY'
}//switch

console.log(`Today is ${day_name}`)
document.getElementById('day_name').innerHTML = `Today is ${day_name}`
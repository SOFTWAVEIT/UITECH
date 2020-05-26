let num = 250

let res = ''

let rem = num % 2

if(rem==0){
    res=`${num} is EVEN`
}
else{
    res=`${num} is ODD`
}

console.log(res)
document.getElementById('odd_even').innerHTML = res
let stateObject = {
    "India": { 
        "Delhi": ["New Delhi", "North Delhi",'Noida'], 
        "Kerala": ["Thiruvananthapuram", "Palakkad","Ernakulam"], 
        "Telangana": ["Hyderabad", "Ranga Reddy","Nalgonda"]
       },
    "Australia": 
       {
           "South Australia": ["Dunstan", "Mitchell"],
           "Victoria": ["Altona", "Euroa"]
       }, 
    "Canada": 
        {
            "Alberta": ["Acadia", "Bighorn"],
            "Columbia": ["Panama", "Magdalena"]
        }
}
/*
for(let country in stateObject){
    console.log(country)
}
console.log(`------------------------`)

for(let state in stateObject.India){
    console.log(state)
}
console.log(`------------------------`)
for(let state in stateObject['India']){
    console.log(state)
}
console.log(`------------------------`)
for(let district of stateObject['India']['Telangana']){
    console.log(district)
}
*/

/* to load country names in the drop down list on page load */
let country_names = document.querySelector('#country_names')
window.onload = function(){
  for(let country in stateObject){
      let opt = new Option(country, country); 
      country_names[country_names.length] = opt;
  }
}
/* ------------------------------------*/
let state_names = document.querySelector('#state_names');
let district_names = document.querySelector('#district_names');

country_names.addEventListener('change',function(){
    state_names.length = 1;
    district_names.length = 1;
    
    let country = country_names.value;
    if(country.length>0){
        for(let state in stateObject[country]){
            let opt = new Option(state, state);
            state_names[state_names.length] = opt;
        }
    }
})

/* ------------------------------------*/

state_names.addEventListener('change',function(){   
    district_names.length = 1;
    let country = country_names.value;
    let state = state_names.value;    
    if(state.length>0){
        for(let district of stateObject[country][state]){
            let opt = new Option(district, district);
            district_names[district_names.length] = opt;
        }
    }
})
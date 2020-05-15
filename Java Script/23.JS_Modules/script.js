export let greetings = (name)=>{
    console.log(`Hello, ${name}`)
    document.querySelector('#main-content').innerHTML = `Hello, ${name}`
}
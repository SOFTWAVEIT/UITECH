let usa = document.getElementById('usa')
let england = document.querySelector('#england')
let australia = document.querySelector('#australia')
let india = document.querySelector('#india')

let showTime = () => {
    let today = new Date()

    /* get time of different locales*/
    let usa_time = today.toLocaleTimeString('en-US',{timeZone:'America/New_york'})
    let eng_time = today.toLocaleTimeString('en-GB',{timeZone:'Europe/london', hour12:true})
    let aus_time = today.toLocaleTimeString('en-AU',{timeZone:'Australia/Sydney'})

    india.innerHTML = '<span style="font-size:20px;color:yellow">MUMBAI</span><br>'+today.toLocaleTimeString()

    usa.innerHTML = '<span style="font-size:20px;color:yellow">NEW YORK</span><br>'+usa_time
    england.innerHTML = '<span style="font-size:20px;color:yellow">LONDON</span><br>'+eng_time.toUpperCase()
    australia.innerHTML = '<span style="font-size:20px;color:yellow">SYDNEY</span><br>'+aus_time
}

setInterval(showTime,1000);
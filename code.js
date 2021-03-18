// Count down
// ISO Extended format : Date Time : AAAA-MM-DDTHH:mm:ssZ
// Exemple  2021-11-15T10:00:00Z

// Get time
let countDownDate = new Date('2051-03-18T11:30:00').getTime();

// Update countdown every second
let count = setInterval(countDown, 1000);

function countDown() {
    // Milliseconds
    let now             = new Date().getTime();
    let duration        = countDownDate - now;

    // Calcul days, hours, minues, seconds
    // seconds = modulo minutes
    let seconds         = Math.floor((duration / 1000)  % 60);
    // minutes = modulo hours
    let minutes         = Math.floor((duration / 1000 / 60) % 60);
    // hours = modulo days
    let hours           = Math.floor((duration / (1000 * 60 * 60) ) % 24 );
    // days
    let days            = Math.floor((duration / (1000 * 60 * 60 * 24)));
    document.querySelector('#app').innerHTML = days + 'days' + hours + 'hours' + minutes + 'minutes' + seconds + 'seconds';

    if (duration < 0) {
        console.log('distance < 0');
        document.querySelector('#app').innerHTML = 'END COUNT DOWN';
    }
}


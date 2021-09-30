

//  fetch(`https://api.weatherapi.com/v1/forecast.json?key=f123d6597efc4ae787c193756212109&q=cair00000o&days=3`).then((response) => {
//     if ( response.ok) {
//         return  response.json();
//     } else {
//         throw new Error('Something went wrong');
//     }
// })
//     .then((responseJson) => {
//         // Do something with the response
//         console.log(responseJson);
//     })
//     .catch((error) => {
//         console.log(error)
//     });



try {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=f123d6597efc4ae787c193756212109&q=cairooooooo&days=3`).then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Something went wrong');
        }
    })
        .then((responseJson) => {
            console.log(responseJson);
        })
} catch (err) {
    console.log(err)
}
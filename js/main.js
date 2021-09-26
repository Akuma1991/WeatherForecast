getCurruntWeather();
clrearSearch();

async function getCurruntWeather(q = 'damietta') {
    let firstBody = document.getElementById('firstBody');
    let firstHeader = document.getElementById('firstHeader');
    let firstFooter = document.getElementById('firstFooter');
    let searchCity = document.getElementById('searchCity');
    let alertInput = document.getElementById('alertInput');


    let curruntWeather = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=f123d6597efc4ae787c193756212109&q=${q}&days=3`);
    console.log(curruntWeather.ok);
    if (curruntWeather.ok == true) {
        curruntWeather = await curruntWeather.json();

        console.log(curruntWeather);

        secondDate(curruntWeather.forecast.forecastday[1])
        thirdDate(curruntWeather.forecast.forecastday[2])

        let dateObj = new Date()
        let date = getDate(dateObj);


        let windText = editConditionText(curruntWeather.current.wind_degree);
        console.log(curruntWeather.current.wind_degree);


        firstHeader.innerHTML = `<span class = "d-block fw-bold text-white fs-5">${date[0]}</span>
    <span class ="d-block fw-bold text-white-50 fs-5">${date[1]} ${date[2]}</span>`;

        firstBody.innerHTML = `
    <h5 class="mb-4">${curruntWeather.location.name}</h5>
    <span class="position-absolute top-0 start-50 translate-middle p-2 bg-dark border border-light rounded-circle">
    <img src = 'https:${curruntWeather.current.condition.icon}' />               
    </span>
    
        <h1 class="mb-4 temp fw-bold text-danger" >${curruntWeather.current.temp_c}&#8451;</h1>
        <h5 class="text-info fw-bold">${curruntWeather.current.condition.text}</h5>
       `;

        firstFooter.innerHTML = `<span><i class="fas fa-cloud-showers-heavy text-primary"></i>  ${curruntWeather.current.precip_in}% </span>
    <span><i class="fas fa-wind text-warning"></i>  ${curruntWeather.current.wind_kph}km/h </span>
    <span><i class="far fa-compass text-success"></i>  ${windText}</span>`;

    alertInput.classList.replace('d-block', 'd-none');

    }
    else {
        curruntWeather = await curruntWeather.json();
        
        alertInput.innerHTML = `<h6 class="alert alert-warning">${curruntWeather.error.message}</h6>`;

        alertInput.classList.replace('d-none', 'd-block');
    }

  
}


function secondDate(data) {
    let secondBody = document.getElementById('secondBody');
    let secondHeader = document.getElementById('secondHeader');
    let secondFooter = document.getElementById('secondFooter');

    console.log(data);


    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    let date = getDate(tomorrow);


    secondHeader.innerHTML = `<span class = "d-block fw-bold text-white fs-5">${date[0]}</span>
        <span class ="d-block fw-bold text-white-50 fs-5">${date[1]} ${date[2]}</span>`;

    secondBody.innerHTML = `
    <span class="position-absolute top-0 start-50 translate-middle p-2 bg-dark border border-light rounded-circle">
    <img src = 'https:${data.day.condition.icon}' />               
    </span>
    
        <h1 class="mb-4 temp fw-bold text-danger" >${data.day.maxtemp_c}&#8451;</h1>
        <h3 class="mb-4  fw-bold text-white" >${data.day.mintemp_c}&#8451;</h3>
        <h5 class="text-info fw-bold">${data.day.condition.text}</h5>
       `;

    secondFooter.innerHTML = `<span><i class="fas fa-cloud-showers-heavy text-primary"></i>  ${data.day.totalprecip_in}% </span>
    <span><i class="fas fa-wind text-secondary"></i>  ${data.day.maxwind_kph}km/h </span>
   `;

}

function thirdDate(data) {
    let thirdBody = document.getElementById('thirdBody');
    let thirdHeader = document.getElementById('thirdHeader');
    let thirdFooter = document.getElementById('thirdFooter');

    console.log(data);
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 2)
    let date = getDate(tomorrow);


    thirdHeader.innerHTML = `<span class = "d-block fw-bold text-white fs-5">${date[0]}</span>
            <span class ="d-block fw-bold text-white-50 fs-5">${date[1]} ${date[2]}</span>`;

    thirdBody.innerHTML = `
        <span class="position-absolute top-0 start-50 translate-middle p-2 bg-dark border border-light rounded-circle">
        <img src = 'https:${data.day.condition.icon}' />               
        </span>

            <h1 class="mb-4 temp fw-bold text-danger" >${data.day.maxtemp_c}&#8451;</h1>
            <h3 class="mb-4  fw-bold text-white" >${data.day.mintemp_c}&#8451;</h3>
            <h5 class="text-info fw-bold">${data.day.condition.text}</h5>
           `;

    thirdFooter.innerHTML = `<span><i class="fas fa-cloud-showers-heavy text-primary"></i>  ${data.day.totalprecip_in}% </span>
        <span><i class="fas fa-wind text-warning"></i>  ${data.day.maxwind_kph}km/h </span>
       `;

}

function getDate(date) {
    let weekday = date.toLocaleString("default", { weekday: "long" })
    let month = date.toLocaleString('default', { month: 'long' })
    let dayNumber = date.getDate();
    let dateArray = [];
    dateArray.push(weekday, dayNumber, month);
    console.log(dateArray);
    return dateArray;

}


function editConditionText(degree) {
    if (degree == 0) {
        return 'north wind';
    }
    else if (degree > 0 && degree < 45) {
        return 'north-northeast wind';
    }
    else if (degree == 45) {
        return ' northeast wind';
    }
    else if (degree > 45 && degree < 90) {
        return 'east-northeast wind';
    }
    else if (degree == 90) {
        return 'east wind';
    }
    else if (degree > 90 && degree < 135) {
        return 'east-southeast wind ';
    }
    else if (degree == 135) {
        return 'southeast wind';
    }
    else if (degree > 135 && degree < 180) {
        return 'south-southeast wind';
    }
    else if (degree == 180) {
        return ' south wind ';
    }
    else if (degree > 180 && degree < 225) {
        return 'south-southwest wind';
    }
    else if (degree == 225) {
        return ' southwest wind ';
    }
    else if (degree > 225 && degree < 270) {
        return 'west-southwest wind ';
    }
    else if (degree == 270) {
        return 'west wind ';
    }

    else if (degree > 270 && degree < 315) {
        return 'west-northwest wind';
    }
    else if (degree == 315) {
        return ' northwest wind';
    }
    else if (degree > 315 && degree < 360) {
        return 'north-northwest wind ';
    }
    else if (degree == 360) {
        return 'north wind';
    }
}



document.addEventListener('keyup', (e) => {
    if (searchCity.value.length > 2) {
        console.log(searchCity.value);
        console.log(searchCity.value.length);
        getCurruntWeather(searchCity.value);
    }
});

function clrearSearch() {
    searchCity.value = '';
}




/*!
* Start Bootstrap - Modern Business v5.0.6 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project



import teamData from './teamData.json' assert {type: 'json'};



let teamInfo = document.getElementById("team-info");

for (let key in teamData) {
    teamInfo.innerHTML += `<div class="col mb-5 mb-5 mb-xl-0">
    <div class="text-center">
        <img class="img-fluid rounded-circle mb-4 px-4"
            src="${teamData[key].imgUrl}" alt="..." />
        <h5 class="fw-bolder">${teamData[key].name}</h5>
        <div class="fst-italic text-muted">${teamData[key].designation}</div>
    </div>
</div>`;
}
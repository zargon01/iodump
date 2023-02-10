/*!
* Start Bootstrap - Modern Business v5.0.6 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project



import eventData from './data.json' assert {type: 'json'};

console.log(eventData)

let recentEvents = document.getElementById("recent-events");

for (let i = 0; i < 3; i++) {
    recentEvents.innerHTML += `<div class="col-lg-4 mb-5">
<div class="card h-100 shadow border-0">
    <img class="card-img-top" src="${eventData[i].imgUrl}" alt="..." />
    <div class="card-body p-4">
        <a class="text-decoration-none link-dark stretched-link" href="#!">
            <h5 class="card-title mb-3">${eventData[i].title}</h5>
        </a>
        <p class="card-text mb-0">${eventData[i].shortDescription}</p>
    </div>
</div>
</div>`;
}
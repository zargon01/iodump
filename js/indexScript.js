import eventData from './eventData.json' assert {type: 'json'};


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

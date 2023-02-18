import gallery from './gallery.json' assert {type: 'json'};


let recentEvents = document.getElementById("gallery");

for (let i = 0; i < 9; i++) {
    recentEvents.innerHTML += `<div class="col-lg-4 mb-5">
<div class="card h-100 shadow border-0">
    <img class="card-img-top" src="${gallery[i].imgUrl}" alt="..." />
</div>
</div>`;
}

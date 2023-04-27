import gallery from './gallery.json' assert {type: 'json'};


let recentEvents = document.getElementById("gallery");

let img_list = [];
Object.keys(gallery).forEach((key) => {
    for (let i = 0; i < gallery[key]["cnt"]; i++) {
        img_list.push("assets/events/" + key + "/" + i.toString() + ".jpg");
    }
})

img_list.sort(() => Math.random() - 0.5);

img_list.forEach((imgUrl) => {
    recentEvents.innerHTML += `<div class="col-lg-4 mb-5">
    <div class="card h-100 shadow border-0">
    <img class="card-img-top" src="${imgUrl}" alt="..." />
    </div>
    </div>`;
})
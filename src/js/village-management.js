
const villages = [
  {
    name: "Jabalia",
    region: "Gaza Strip",
    area: 10,
    latitude: 31.9522,
    longitude: 35.2034,
    tags: ["rural", "urban"],
    img: "../images/admin-image.jpeg"
  },
  {
    name: "Beit Hanouhhhhn",
    region: "Gaza Strip",
    area: 15,
    latitude: 31.5362,
    longitude: 34.5041,
    tags: "urban",
    img: "../images/admin-image.jpeg"
  }
];

const villageContainer = document.querySelector("#village-list-container");

function createVillageEntry(village) {

  const villageDiv = document.createElement("div");
  villageDiv.innerHTML = `
    <span>${village.name}</span> - <span>${village.region}</span>
    <button class="view-village-btn">View</button>
    <button class="update-village-btn">Update Village</button>
    <button class="delete-village-btn">Delete Village</button>
    <button class="demographic-btn">Update Demographic Data</button>
  `;

  villageContainer.appendChild(villageDiv);
}


function generateVillageList(villages) {
  villageContainer.innerHTML = ""; 
  for(individualVillage of villages){
    createVillageEntry(individualVillage);
  }
}


generateVillageList(villages);
villageContainer.addEventListener("click", () => console.log("shehab"))

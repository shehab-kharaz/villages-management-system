const villageContainer = document.querySelector("#village-list-container");
const villagesMap = new Map();

villagesMap.set("Jabalia", {
  name: "Jabalia",
  region: "Gaza Strip",
  area: 10,
  latitude: 31.9522,
  longitude: 35.2034,
  tags: ["rural", "urban"],
  img: "../images/admin-image.jpeg"
});

villagesMap.set("Beit Hanouhhhhn", {
  name: "Beit Hanouhhhhn",
  region: "Gaza Strip",
  area: 15,
  latitude: 31.5362,
  longitude: 34.5041,
  tags: "urban",
  img: "../images/admin-image.jpeg"
});



function createVillageEntry(village) {

  const villageDiv = document.createElement("div");
  villageDiv.classList.add("village-item");
  villageDiv.setAttribute("data-village-id", village.name);
  villageDiv.innerHTML = `
    <div class="name-container"> 
     <span>${village.name}</span> - <span>${village.region}</span>
    </div> 
    <div class="buttons-container">
    <button class="view-village-btn">View</button>
    <button class="update-village-btn">Update Village</button>
    <button class="delete-village-btn">Delete Village</button>
    <button class="demographic-btn">Update Demographic Data</button>
    <div>
  `;
  villageContainer.appendChild(villageDiv);
}


function generateVillageList(villagesMap) {
  villageContainer.innerHTML = ""; 
  for(individualVillage of villagesMap.values()){
    createVillageEntry(individualVillage);
  }
}

generateVillageList(villagesMap);

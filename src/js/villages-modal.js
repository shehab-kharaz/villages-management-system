const modal = document.querySelector("#village-options-modal");
const modalBackdrop = document.querySelector("#modal-backdrop");
const modalTitle = document.querySelector("#modal-title");
const modalBody = document.querySelector("#modal-body");
const closeButton = document.querySelector("#modal-close-button");
const addNewVillageButton = document.querySelector(".add-new-village-btn");

let previouslyFocusedElement;

const updateVillageForm = 
[
  "Village Name", 
  "Region/ District", 
  "Land Area (sq km)", 
  "Latitude", 
  "Longitude", 
  "Upload Image"
];
const addNewVillageForm = 
[
  ...updateVillageForm, 
  "Categories/ Tags"
]

const createAddNewVillageModal = () => 
  createAddUpdateVillageModal("Add New Village", "Add Village", addNewVillageForm);
const createUpdateVillageModal = () => 
  createAddUpdateVillageModal("Update Village", "Update Village", updateVillageForm);



function openModal() {
  previouslyFocusedElement = document.activeElement;
  modal.classList.add("modal-active");
  modalBackdrop.classList.add("modal-active");
  modal.removeAttribute("inert");
  modalBackdrop.removeAttribute("inert");
  modal.focus();
}

function closeModal() {
  modal.classList.remove("modal-active");
  modalBackdrop.classList.remove("modal-active");
  modal.setAttribute("inert", "");
  modalBackdrop.setAttribute("inert", "");
  previouslyFocusedElement.focus();
}

function setUpModal(title, bodyContent, actionButton=null) {
  modalTitle.innerText = title;
  modalBody.innerHTML = ""; 
  modalBody.appendChild(bodyContent);

  if (actionButton) 
    modalBody.appendChild(actionButton);
  
  openModal();
}

function createFormTemplate(type) {
  const templateFragment = document.createDocumentFragment();

  type.forEach(field => {
      const formElements = createElementWithLabel(
        field, 
        field === 'Upload Image' ? 'file' : 'text', 
        field.replace(/\s+/g, '-').toLowerCase()
      );

      templateFragment.appendChild(formElements);
  });

  return templateFragment;
}

function createElementWithLabel(labelText, inputType, inputId) {
  const label = document.createElement('label');
  label.textContent = `${labelText}:`;
  label.setAttribute("for", inputId);

  const input = document.createElement('input');
  input.setAttribute('type', inputType);
  input.setAttribute('id', inputId);

  input.setAttribute('required', true);

  if(input.id === "categories/-tags"){
    input.setAttribute("placeholder", "e.g., rural, urban");
  }

  const container = document.createElement('div');
  container.appendChild(label);
  container.appendChild(input);

  return container;
}

function createAddUpdateVillageModal(title, buttonText, data) {
  const villageNewUpdateTemplate = createFormTemplate(data);

  const actionButton = document.createElement("button");
  actionButton.innerText = buttonText;
  actionButton.addEventListener("click", ()=>{
    console.log("Add button Clicked");
  })

  setUpModal(title, villageNewUpdateTemplate, actionButton)
  openModal();
}

function createViewModal(villageId) {
  const village = villagesMap.get(villageId);
  const details = 
  `
    <p><strong>Village Name:</strong> ${village.name}</p>
    <p><strong>Region/ District:</strong> ${village.region}</p>
    <p><strong>Land Area (sq km):</strong> ${village.area}</p>
    <p><strong>Latitude:</strong> ${village.latitude}</p>
    <p><strong>Longitude:</strong> ${village.longitude}</p>
    <p><strong>Tags:</strong> ${Array.isArray(village.tags) ? village.tags.join(", ") : village.tags}</p>
    <img src="${village.img}" alt="village-image" style="max-width: 100%;">
  `;
  const container = document.createElement("div");
  container.innerHTML = details;
  setUpModal("Village Details", container); 
}

function createDeleteModal(villageId) {
  const village = villagesMap.get(villageId);

  const message = document.createElement("p");
  message.textContent = `Are you sure you want to delete the village "${village.name}"? This action cannot be undone.`;

  const confirmButton = document.createElement("button");
  confirmButton.textContent = "Yes, Delete";
  confirmButton.addEventListener("click", () => {
    villagesMap.delete(villageId);
    generateVillageList(villagesMap);
    closeModal(); 
  });

  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";
  cancelButton.addEventListener("click", closeModal);

  const container = document.createElement("div");
  container.appendChild(message);
  container.appendChild(confirmButton);
  container.appendChild(cancelButton);

  setUpModal("Delete Village", container);
}

function createUpdateDemographicsModal() {
  const formFields = [
    { 
      label: "Population Size", placeholder: "", id: "population-size" 
    },
    { 
      label: "Age Distribution", placeholder: "e.g., 0-14: 30%, 15-64: 60%, 65+: 10%", id: "age-distribution" 
    },
    { 
      label: "Gender Ratio", placeholder: "e.g., Male: 51%, Female: 49%", id: "gender-ratio" 
    },
    { 
      label: "Population Growth Rate", placeholder: "", id: "population-growth-rate" 
    }
  ];

  const formFragment = document.createDocumentFragment();

  formFields.forEach(({ label, placeholder, id }) => {
    const inputElement = createElementWithLabel(label, "text", id);
    if (placeholder) 
      inputElement.querySelector("input").setAttribute("placeholder", placeholder);
    
    formFragment.appendChild(inputElement);
  });

  const saveButton = document.createElement("button");
  saveButton.textContent = "Add Demographic Data";
  saveButton.addEventListener("click", () => {
    const demographics = {
      populationSize: document.querySelector("#population-size").value,
      ageDistribution: document.querySelector("#age-distribution").value,
      genderRatio: document.querySelector("#gender-ratio").value,
      populationGrowthRate: document.querySelector("#population-growth-rate").value
    };

    console.log("Demographic data added:", demographics); 
    closeModal();
    alert("Demographic data has been updated successfully.");
  });

  setUpModal("Update Demographics", formFragment, saveButton); 
}


function performActionBasedOnButton(event){

  const villageDiv = event.target.closest(".village-item");
  const villageId = villageDiv.getAttribute("data-village-id");

  if (event.target.classList.contains("view-village-btn")) {
    createViewModal(villageId);
  } else if (event.target.classList.contains("update-village-btn")) {
    createUpdateVillageModal();
  } else if (event.target.classList.contains("delete-village-btn")) {
    createDeleteModal(villageId);
  } else if (event.target.classList.contains("demographic-btn")) {
    createUpdateDemographicsModal();
  }
}






closeButton.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", closeModal);
addNewVillageButton.addEventListener("click", createAddNewVillageModal);
villageContainer.addEventListener("click", (event) => performActionBasedOnButton(event));

const modal = document.querySelector("#village-options-modal");
const modalBackdrop = document.querySelector("#modal-backdrop");
const modalTitle = document.querySelector("#modal-title");
const modalBody = document.querySelector("#modal-body");
const closeButton = document.querySelector("#modal-close-button");
const addNewVillageButton = document.querySelector(".add-new-village-btn");

const updateVillageForm = ["Village Name", "Region/ District", "Land Area (sq km)", "Latitude", "Longitude", "Upload Image"];
const addNewVillageForm = [...updateVillageForm, "Categories/ Tags"]

const createAddNewVillageModal = () => createAddUpdateVillageModal("Add New Village", "Add Village", addNewVillageForm);
const createUpdateVillageModal = () => createAddUpdateVillageModal("Update Village", "Update Village", updateVillageForm);


let previouslyFocusedElement;

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
  modalBody.innerHTML = "";
  modalTitle.innerText = title;

  const actionButton = document.createElement("button");
  actionButton.innerText = buttonText;

  modalBody.appendChild(villageNewUpdateTemplate);
  modalBody.appendChild(actionButton);
  openModal();
}



closeButton.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", closeModal);
addNewVillageButton.addEventListener("click", createAddNewVillageModal);
document.querySelector("#update-village-btn").addEventListener("click",createUpdateVillageModal )


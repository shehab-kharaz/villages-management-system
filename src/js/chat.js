const admins = [
  { name: "Shehab Kharaz", image: "../images/admin-image.jpeg" },
  { name: "Amjad Abu Hassan", image: "../images/admin-image.jpeg" },
  { name: "Mayson Ashayer", image: "../images/admin-image.jpeg" }
];


function renderAdmins(admins, containerSelector) {
  const container = document.querySelector(containerSelector);
  container.innerHTML = "";

  const fragment = document.createDocumentFragment();
  admins.forEach(admin => {
      const adminElement = createAdminElement(admin);
      fragment.appendChild(adminElement);
  });

  container.appendChild(fragment);
}


function createAdminElement(admin) {
  const figure = document.createElement("figure");

  const img = document.createElement("img");
  img.src = admin.image;
  img.alt = `${admin.name}'s profile picture`;

  const caption = document.createElement("figcaption");
  caption.textContent = admin.name;

  figure.appendChild(img);
  figure.appendChild(caption);

  return figure;
}

renderAdmins(admins, ".available-admins");

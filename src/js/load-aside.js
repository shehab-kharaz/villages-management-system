const sidebar = document.querySelector('aside');

function loadSidebar() {
  const currentPath = window.location.pathname;
  const baseDirectory = currentPath.substring(0, currentPath.lastIndexOf('/'));
  let sidebarPath;

  if (baseDirectory.includes('/src/html')) {
    sidebarPath = 'sidebar.html'; 
  } else {
    const depth = baseDirectory.split('/').length; 
    sidebarPath = '../'.repeat(depth) + 'src/html/sidebar.html'; 
  }

  fetch(sidebarPath)
    .then(response => response.text())
    .then(data => {
      sidebar.innerHTML = data;
    })
    .catch(error => console.error('Error loading sidebar:', error));
}

function toggleSidebar() {
  const aside = document.querySelector("aside");
  const body = document.querySelector("body");
  aside.classList.toggle('collapsed');
  body.classList.toggle("side-collapsed");
}

sidebar.addEventListener('click', function (event) {
  if (event.target.id === 'toggleButton') {
    toggleSidebar();
  }

  const container = event.target.closest('li, div'); 
  if (container && container.querySelector('a')) {
    const link = container.querySelector('a');
    if (link && link.href) {
      window.location.href = link.href;
    }
  }
});

window.onload = loadSidebar;

const sidebar = document.getElementById("sidebar");
const toggleSidebarButton = document.getElementById("toggle-sidebar");


function toggleSidebar(){
  sidebar.classList.toggle("show")
}


toggleSidebarButton.addEventListener("click", () => {
  sidebar.classList.toggle("show") 
});
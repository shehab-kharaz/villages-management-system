const infoData =
{
  totalVillages: 8,
  totalUrbanAreas: 3,
  totalPopulation: 660000,
  averageLandArea: 11.88,  
};

function updateInfoDisplay() {
  document.getElementById('village-number').textContent = infoData.totalVillages.toLocaleString();
  document.getElementById('urban-number').textContent = infoData.totalUrbanAreas.toLocaleString()
  document.getElementById('population-number').textContent = infoData.totalPopulation.toLocaleString();
  document.getElementById('land-area-number').textContent = infoData.averageLandArea.toLocaleString();
}

updateInfoDisplay();

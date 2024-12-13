const ageDistributionData = 
{
    labels: ['0-18', '19-35', '36-50', '51-65', '65+'],
    datasets: [{
        data: [15, 10, 40, 15, 20],
        backgroundColor: ['#a74c65', '#2f71a3', '#a58c4d', '#3c8489', '#684eaf']
    }]
}

const genderRatiosData = 
{
    labels: ['Male', 'Female'],
    datasets: [{
        data: [48, 52],
        backgroundColor: ['#2f71a3', '#a74c65']
    }]
}

const populationData = 
{
    labels: ['v1', 'v2', 'v3', 'v4', 'v5'],
    datasets: [{
        label: 'Population',
        data: [50000, 250000, 150000, 200000, 100000 ],
        backgroundColor: '#3c5b66'
    }]
}





function createAgeDistributionChart() {
    const ageCtx = document.getElementById('ageChart').getContext('2d');

    const ageChartConfig = 
    {
        type: 'pie',
        data: ageDistributionData,
        options: getCommonPieOptions('Age Distribution')
    };

    new Chart(ageCtx, ageChartConfig);
}

function createGenderRatioChart() {
    const genderCtx = document.getElementById('genderChart').getContext('2d');

    const genderChartConfig = 
    {
        type: 'pie',
        data: genderRatiosData,
        options: getCommonPieOptions('Gender Ratios')
    };

    new Chart(genderCtx, genderChartConfig);
}

function createPopulationChart() {
    const populationCtx = document.getElementById('populationChart').getContext('2d');

    const populationChartConfig = {
        type: 'bar',
        data: populationData,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Population by Region',
                    font: { size: 18 },
                    color: '#ffffff'
                },
                legend: {
                    position: 'top',
                    labels: { color: '#ffffff' }
                }
            },
            scales: {
                x: {
                    ticks: { color: '#ffffff' },
                    grid: { color: '#6b7280' }
                },
                y: {
                    ticks: { color: '#ffffff' },
                    grid: { color: '#6b7280' }
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
    };

    new Chart(populationCtx, populationChartConfig);
}

function getCommonPieOptions(titleText) {
    return {
        plugins: {
            title: {
                display: true,
                text: titleText,
                font: { size: 18 },
                color: '#ffffff'
            },
            legend: {
                position: 'bottom',
                labels: { color: '#ffffff' }
            }
        },
        responsive: true,
        maintainAspectRatio: false
    };
}


function initializeCharts() {
    createAgeDistributionChart();
    createGenderRatioChart();
    createPopulationChart();
}

initializeCharts();

import { fetchNASAData } from './api.js';
import { processNASAData } from './data.js';
import { renderNASAData } from './display.js';

// Функция для инициализации приложения
function chooseDate() {
    const nasaContainer = document.getElementById('nasa-container');
    nasaContainer.innerHTML = `
    <p>Enter the desired date (format YYYY-MM-DD):</p><br>
    <input id="date"></input>
    <button id="temp">Submit</button>`
    document.getElementById('temp').onclick = imgDay;
}

async function imgDay() {
    const date = document.getElementById('date').value;
    const nasaData = await fetchNASAData(date);
    
    if (nasaData) {
        const processedData = processNASAData(nasaData);
        renderNASAData(processedData);
    } else {
        // Если данные не удалось получить, отобразим соответствующее сообщение на странице
        const errorMessage = 'Failed to fetch NASA data. Please try again later.';
        const nasaContainer = document.getElementById('nasa-container');
        nasaContainer.innerHTML = `<p>${errorMessage}</p>`;
    }
}

export { chooseDate, imgDay };

console.log('script main.js loaded')
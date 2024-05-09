import { fetchNASAData } from './api.js';
import { processNASAData } from './data.js';
import { renderNASAData } from './display.js';

// Функция для инициализации приложения
async function init() {
    const nasaData = await fetchNASAData();
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

init();

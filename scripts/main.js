import { fetchNASAData, fetchFLRData } from './api.js';
import { processNASAData, processFLRData } from './data.js';
import { renderNASAData, renderFLRData } from './display.js';

// Функция для инициализации метода Image of The Day
function chooseDate() {
    const nasaContainer = document.getElementById('nasa-container');
    nasaContainer.innerHTML = `
    <p>Enter the desired date (format YYYY-MM-DD):</p><br>
    <input id="date"></input>
    <button id="temp">Submit</button>`
    try {
        document.getElementById('temp').onclick = imgDay;
    } catch {
        console.log('mismatch');
    }

    try {
        document.getElementById('temp').onclick = FLR;
    } catch {
        console.log('mismatch');
    }
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

async function FLR() {
    const date = document.getElementById('date').value;
    const FLRData = await fetchFLRData(date);

    if (FLRData) {
        const processedData = processFLRData(FLRData);
        renderFLRData(processedData);
    } else {
        // Если данные не удалось получить, отобразим соответствующее сообщение на странице
        const errorMessage = 'Failed to fetch NASA data. Please try again later.';
        const nasaContainer = document.getElementById('nasa-container');
        nasaContainer.innerHTML = `<p>${errorMessage}</p>`;
    }
}

export { chooseDate, imgDay, FLR };

console.log('script main.js loaded');
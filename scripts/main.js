import { fetchNASAData, fetchFLRData } from './api.js';
import { processNASAData, processFLRData } from './data.js';
import { renderNASAData, renderFLRData } from './display.js';

// Функция для инициализации метода Image of The Day
function chooseDate1() {
    const nasaContainer = document.getElementById('inputs');
    nasaContainer.innerHTML = `
    <h3>Enter the desired date (format YYYY-MM-DD):</h3><br>
    <input id="date"></input>
    <button id="temp">Submit</button>
    <button id="clear" onclick="clearNASA()">Clear</button>`
    document.getElementById('temp').onclick = imgDay;
     
}

// Функция для инициализации метода Solar Flare
function chooseDate2() {
    const nasaInputContainer = document.getElementById('inputs');
    nasaInputContainer.innerHTML = `
    <h3>Enter the desired date (format YYYY-MM-DD):</h3><br>
    <input id="date"></input>
    <button id="temp">Submit</button>
    <button id="clear" onclick="clearNASA()">Clear</button>`
    document.getElementById('temp').onclick = FLR;
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
    document.getElementById('results').innerHTML = '';

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

export { chooseDate1, chooseDate2, imgDay, FLR };

console.log('script main.js loaded');
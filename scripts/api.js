import { API_KEY } from "./api_key.js";

// Функция для выполнения запроса к API NASA и получения данных о космических фотографиях
async function fetchNASAData(date) {
    try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${API_KEY}`);
        const data = await response.json();
        return data; // Возвращаем объект с данными о космической фотографии дня
    } catch (error) {
        console.error('Error fetching NASA data:', error);
        return null; // Возвращаем null в случае ошибки
    }
}

// Функция для выполнения запроса к API NASA и получения данных о солнечном всплеске
async function fetchFLRData(date) {
    try {
        const response = await fetch(`https://api.nasa.gov/DONKI/FLR?startDate=${date}&api_key=${API_KEY}`);
        const data = await response.json();
        return data; // Возвращаем объект с данными о солнечном всплеске
    } catch (error) {
        console.error('Eror fetching FLR data:', error);
        return null; // Возвращаем null в случае ошибки
    }
}

export { fetchNASAData, fetchFLRData };

import { API_KEY } from "./api_key";

// Функция для выполнения запроса к API NASA и получения данных о космических фотографиях
async function fetchNASAData() {
    try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
        const data = await response.json();
        return data; // Возвращаем объект с данными о космической фотографии дня
    } catch (error) {
        console.error('Error fetching NASA data:', error);
        return null; // Возвращаем null в случае ошибки
    }
}

export { fetchNASAData };

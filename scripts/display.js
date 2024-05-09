// Функция для отображения данных о космической фотографии на странице
function renderNASAData(nasaData) {
  const nasaContainer = document.getElementById('nasa-container');
  nasaContainer.innerHTML = `
      <h2>${nasaData.title}</h2>
      <p>Date: ${nasaData.date}</p>
      <img src="${nasaData.imageURL}" alt="NASA Image of the Day">
      <p>${nasaData.explanation}</p>
  `;
}

export { renderNASAData };

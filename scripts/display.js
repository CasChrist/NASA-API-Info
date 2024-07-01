// Функция для отображения данных о космической фотографии на странице
function renderNASAData(nasaData) {
  const nasaContainer = document.getElementById('nasa-container');
  nasaContainer.innerHTML = `
    <article>
      <h2>${nasaData.title}</h2>
      <time>Date: ${nasaData.date}</time>
      <p>${nasaData.explanation}</p>
      <img src="${nasaData.imageURL}" alt="NASA Image of the Day">
    </article>
  `;
}

export { renderNASAData };

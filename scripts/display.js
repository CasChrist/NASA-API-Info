// Функция для отображения данных о космической фотографии на странице
function renderNASAData(nasaData) {
  const nasaResultContainer = document.getElementById('results');
  nasaResultContainer.innerHTML = `
      <h2>${nasaData.title}</h2>
      <time>Date: ${nasaData.date}</time>
      <p>${nasaData.explanation}</p>
      <img src="${nasaData.imageURL}" alt="NASA Image of the Day">
  `;
}

function renderFLRData(FLRData) {
  const nasaResultContainer = document.getElementById('results');

  // Создаём маркированный список
  let ul = document.createElement('ul');
  ul.setAttribute('id', 'solarFlareInfo');
  nasaResultContainer.appendChild(ul);
  
  // Находим созданный маркированный список
  let ulTag = document.getElementById('solarFlareInfo');

  let info = FLRData;

  // Добавляем каждый элемент info в виде пунктов списка
  info.forEach(function(info) {
    var li = document.createElement('li');
    li.innerHTML = info;
    ulTag.appendChild(li);
});
}

export { renderNASAData, renderFLRData };

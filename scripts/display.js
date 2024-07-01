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

function renderFLRData(FLRData) {
  const nasaContainer = document.getElementById('nasa-container');

  // Создаём маркированный список
  let ul = document.createElement('ul');
  ul.setAttribute('id', 'solarFlareInfo');
  nasaContainer.appendChild(ul);
  
  // Находим созданный маркированный список
  ulTag = document.getElementById('solarFlareInfo');

  info = FLRData;

  // Добавляем каждый элемент info в виде пунктов списка
  info.forEach(function(info) {
    var li = document.createElement('li');
    li.innerHTML = info;
    ulTag.appendChild(li);
});
}

export { renderNASAData, renderFLRData };

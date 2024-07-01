// Функция для отображения данных о космической фотографии на странице
function renderNASAData(nasaData) {
  const nasaResultContainer = document.getElementById('results');
  nasaResultContainer.innerHTML = `
      <h2>${nasaData.title}</h2>
      <time>Date: ${nasaData.date}</time>
      <p>${nasaData.explanation}</p>
      <img id="picture" src="${nasaData.imageURL}" alt="NASA Image of the Day">
  `;

  let info = [
    nasaData.title,
    nasaData.date,
    nasaData.explanation,
    nasaData.imageURL
  ]

  let textToSave = info.join('\n');

  // Создаем Blob из строки
  let blob = new Blob([textToSave], { type: 'text/plain' });

  // Создаем URL для Blob
  let url = URL.createObjectURL(blob);

  // Создаем временный элемент <a> для скачивания файла
  let a = document.createElement('a');
  a.href = url;
  a.text = 'Click here to download a txt with this info'
  a.download = 'image_of_the_day.txt';
  let prevNode = document.getElementById('picture');
  nasaResultContainer.insertBefore(a, prevNode);
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
    let li = document.createElement('li');
  li.innerHTML = info;
    ulTag.appendChild(li);
  });

  // Преобразуем массив в строку
  let textToSave = info.join('\n');

  // Создаем Blob из строки
  let blob = new Blob([textToSave], { type: 'text/plain' });

  // Создаем URL для Blob
  let url = URL.createObjectURL(blob);

  // Создаем временный элемент <a> для скачивания файла
  let a = document.createElement('a');
  a.href = url;
  a.text = 'Click here to download a txt with this info'
  a.download = 'solar_flare_info.txt';
  nasaResultContainer.appendChild(a);
}

export { renderNASAData, renderFLRData };

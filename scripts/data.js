// Функция для обработки полученных данных о космической фотографии дня
function processNASAData(data) {

  return {
      title: data.title,
      date: data.date,
      explanation: data.explanation,
      imageURL: data.url
  };
}

function processFLRData(data) {
  solar_flare = data;
  
  // Извлекаем нужную информацию
  let info = [
    "FLR ID: " + solarFlare.flrID,
    "Начало: " + solarFlare.beginTime,
    "Пик: " + solarFlare.peakTime,
    "Тип класса: " + solarFlare.classType,
    "Регион на солнце: " + solarFlare.sourceLocation,
    "Примечание: " + solarFlare.note,
    "Ссылка на подробности: <a href='" + solarFlare.link + "' target='_blank'>" + solarFlare.link + "</a>",
    "Связанные события:"
  ];

  // Добавляем связанные события в список
  solarFlare.linkedEvents.forEach(function(event) {
    info.push("- " + event.activityID);
  });

  return info;
}

export { processNASAData, processFLRData };

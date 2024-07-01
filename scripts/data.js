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
  let solarFlare = data[0];
  console.log(solarFlare);
  
  // Извлекаем нужную информацию
  let info = [
    "FLR ID: " + solarFlare.flrID,
    "Begin Time: " + solarFlare.beginTime,
    "Peak Time: " + solarFlare.peakTime,
    "Class Type: " + solarFlare.classType,
    "Source Location: " + solarFlare.sourceLocation,
    "Note, if any: " + solarFlare.note,
    "More Info: <a href='" + solarFlare.link + "' target='_blank'>" + solarFlare.link + "</a>",
    "Linked Events, if any:"
  ];

  // Добавляем связанные события в список
  solarFlare.linkedEvents.forEach(function(event) {
    info.push("- " + event.activityID);
  });

  return info;
}

export { processNASAData, processFLRData };

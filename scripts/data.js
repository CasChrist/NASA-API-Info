// Функция для обработки полученных данных о космической фотографии дня
function processNASAData(data) {
  // В этой функции можно осуществлять любую необходимую обработку данных
  // Например, фильтрация, сортировка или выделение нужных полей

  return {
      title: data.title,
      date: data.date,
      explanation: data.explanation,
      imageURL: data.url
  };
}

export { processNASAData };

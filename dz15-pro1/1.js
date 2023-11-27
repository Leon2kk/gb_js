"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/
const musicAlbum = [
  {
    title: "The Eminem Show",
    artist: "Eminem",
    year: "2002"
  },
  {
    title: "Encore",
    artist: "Eminem",
    year: "2004"
  },
  {
    title: "Relapse",
    artist: "Eminem",
    year: "2009"
  },
];

const myIterable = {};
myIterable[Symbol.iterator] = function* () {
  for (const item of musicAlbum) {
    yield item;
  }
};

//[...myIterable];

for (const item of myIterable) {
  viewerNameArtistYear(item);
}

function viewerNameArtistYear(item)
{
  console.log(`${item.title} - ${item.artist} (${item.year})`);
}
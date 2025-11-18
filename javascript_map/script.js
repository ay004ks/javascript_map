// JavaScript
console.log('Hello world!');

const map = L.map('map').setView([35, 137], 15);

//L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//}).addTo(map);

//L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>',}).addTo(map);

// Open Street Map hot
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
}).addTo(map);

//アイコン
//const whiteIcon = L.icon({
  //iconUrl: 'images/ico.png',
  //shadowUrl: 'images/ico_shadow.png',

//iconSize:     [40, 40], // size of the icon
//shadowSize:   [40, 40], // size of the shadow
//iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
//shadowAnchor: [20, 40],  // the same for the shadow
//popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
//});


//L.marker([35, 137],{ icon: whiteIcon }).addTo(map).bindPopup('触るな！<img src="images/img01.png" alt="img">');

//L.marker([34.995, 137.003,]).addTo(map).bindPopup('逃げろ').openPopup();

//複数アイコンをまとめて定義
const circleIcon = L.Icon.extend({
  options: {
    shadowUrl: 'images/ico_shadow.png',
    iconSize: [40, 40],
    shadowSize: [40, 40],
    iconAnchor: [20, 40],
    shadowAnchor: [20, 40],
    popupAnchor: [0, -42]
  }
});

const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' }),
  yellowIcon = new circleIcon({ iconUrl: 'images/ico_yellow.png' }),
  blueIcon = new circleIcon({ iconUrl: 'images/ico_blue.png' }),
  pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' });

L.marker([35, 137], { icon: whiteIcon }).addTo(map).bindPopup('触るな！<img src="images/img01.png" alt="img">');

L.marker([35.005, 137.003], { icon: pinkIcon }).addTo(map).bindPopup('こんにちは！');

L.marker([34.999, 137.002], { icon: yellowIcon }).addTo(map).bindPopup('にげろ！').openPopup();

L.marker([34.998, 136.999], { icon: blueIcon }).addTo(map).bindPopup('空暗くなってきたんやがどういうことや');

const circle = L.circle([35, 136], {
  color: 'black', //円の輪郭線の色
  fillColor: 'rgba(0, 0, 0, 1)', //円の塗りつぶしの色
  fillOpacity: 0.3, //塗りつぶしの不透明度
  radius: 30000 //半径、メートルで指定
}).addTo(map);

// 多角形の表示
const polygon = L.polygon([
  [35.5, 137.05],
  [35.4, 137.2],
  [35.7, 137.03]
], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.3
}).addTo(map);
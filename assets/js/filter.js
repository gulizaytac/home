
var g = false;
var ftg = false;
var tkv = false;
var wb = false;
var afs = false;
var pul = false;
function deleteAll(){
  var pullar = document.querySelectorAll(".main");
  for (var i = 0; i < pullar.length; i++) {
    pullar[i].style.display = "none";
  }
  return true;
}
async function openPul() {
  let isDeleted = await deleteAll();
  console.log(isDeleted)
  var pullar = document.querySelectorAll(".pul");
  for (var i = 0; i < pullar.length; i++) {
    pullar[i].style.display = "flex";
  }
  var hedef = document.getElementById("baslik");
  var htmlKodu = '<h1>Anı Pulu çalışmalarım</h1>';
  hedef.innerHTML = htmlKodu;
}
async function openGif() {
  let isDeleted = await deleteAll();
  console.log(isDeleted)
  var gifler = document.querySelectorAll(".g");
  for (var i = 0; i < gifler.length; i++) {
    gifler[i].style.display = "flex";
  }
  var hedef = document.getElementById("baslik");
  var htmlKodu = '<h1>Gif ve Hareketli çalışmalarım</h1>';
  hedef.innerHTML = htmlKodu;
  
}

async function openftg() {
  let isDeleted = await deleteAll();
  console.log(isDeleted)
  var fotolar = document.querySelectorAll(".ftg");
  for (var i = 0; i < fotolar.length; i++) {
    fotolar[i].style.display = "flex";
  }
  var hedef = document.getElementById("baslik");
  var htmlKodu = '<h1>Fotoğrafçılık çalışmalarım</h1>';
  hedef.innerHTML = htmlKodu;
}

async function opentkv() {
  let isDeleted = await deleteAll();
  console.log(isDeleted)
  var takvimler = document.querySelectorAll(".tkv");
  for (var i = 0; i < takvimler.length; i++) {
    takvimler[i].style.display = "flex";
  }
  var hedef = document.getElementById("baslik");
  var htmlKodu = '<h1>Takvim tasarımı çalışmalarım</h1>';
  hedef.innerHTML = htmlKodu;
}

async function openWb() {
  let isDeleted = await deleteAll();
  console.log(isDeleted)
  var webler = document.querySelectorAll(".wb");
  for (var i = 0; i < webler.length; i++) {
    webler[i].style.display = "flex";
  }
  var hedef = document.getElementById("baslik");
  var htmlKodu = '<h1>Web ve Dijital tasarım çalışmalarım</h1>';
  hedef.innerHTML = htmlKodu;
}

async function openAfs() {
  let isDeleted = await deleteAll();
  console.log(isDeleted)
  var afisler = document.querySelectorAll(".afs");
  for (var i = 0; i < afisler.length; i++) {
    afisler[i].style.display = "flex";
  }
  var hedef = document.getElementById("baslik");
  var htmlKodu = '<h1>Afiş tasarım çalışmalarım</h1>';
  hedef.innerHTML = htmlKodu;
}

function openVideo() {
  console.log("openVideo");
  var hedef = document.getElementById("videopopup");
  hedef.style.display = "flex"
  var myVideo = document.getElementById("myVideo");
  myVideo.play();
}

function closeVideo() {
  console.log("openVideo");
  var hedef = document.getElementById("videopopup");
  var myVideo = document.getElementById("myVideo");
  myVideo.pause();
  hedef.style.display = "none"
}
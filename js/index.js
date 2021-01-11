// https://stackoverflow.com/questions/44799413/how-to-detect-when-a-marker-is-found-in-ar-js
const video = document.querySelector('#video');
const videoMarker = document.querySelector('#videoMarker');
let imgRegalo = document.querySelector("#imgRegalo");

let isMarkerVisible = false; 

videoMarker.addEventListener('markerFound', function () {
    isMarkerVisible = true;

    video.play();

});

videoMarker.addEventListener('markerLost', function () {
    isMarkerVisible = false;

    video.pause();

    imageNumber = Math.floor(Math.random() * 15) + 1;
    imgRegalo.setAttribute('src', '#image' + imageNumber);
});


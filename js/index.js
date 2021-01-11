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

    // imageNumber = Math.floor(Math.random() * 15) + 1;
    // imgRegalo.setAttribute('src', '#image' + imageNumber);
});


//#region Gestures 
// function handleRotation(ev) {
//     if (isMarkerVisible) {
//         el.object3D.rotation.y += ev.detail.positionChange.x * rotationFactor;
//         el.object3D.rotation.x += ev.detail.positionChange.y * rotationFactor;
//     }
// }

// function handleScale(ev) {
//     if (isMarkerVisible) {
//         this.scaleFactor *= 1 + ev.detail.spreadChange / ev.detail.startSpread;

//         this.scaleFactor = Math.min(
//             Math.max(this.scaleFactor, this.data.minScale),
//             this.data.maxScale
//         );

//         el.object3D.scale.x = scaleFactor * initialScale.x;
//         el.object3D.scale.y = scaleFactor * initialScale.y;
//         el.object3D.scale.z = scaleFactor * initialScale.z;
//     }
// }

//#endregion


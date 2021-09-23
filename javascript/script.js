// arrow down animation

var extend_arrow = KUTE.to (
    '#arrow-line',
    {height: '45'},
    {duration: 2000, yoyo:true, repeat: 99999}
).start();

var arrow_head = KUTE.to (
    '#arrow-head',
    { translateY: 24},
    {duration: 2000, yoyo:true, repeat: 99999}
).start();

// blob animation

var morph = KUTE.to (
    '#blob1',
    {path: '#blob3'},
    {duration: 8000, yoyo: true, repeat:99999}
).start();

const blobCont = document.querySelector(".blobCont");
const blobs = Array.from(blobCont.children);
var blobsVis = [];
function getBlobs() {
    for(let i = 0; i < blobs.length - 1; i++) {
        if(blobs[i].classList.contains('hidden') !== true) {
            blobsVis.push(blobs[i].children)
            if(blobsVis[i][i]){
            
            }
        };
    };
};
getBlobs();

console.log(blobsVis)

const input = document.querySelector('#txtTaskName')


input.addEventListener('keydown',eventHandler)
input.addEventListener('keyup',eventHandler)

function eventHandler(e){
    console.log('eevent type ' + e.type);
    console.log('key code : ' + e.keyCode);
    console.log('value : ' + e.target.value);
}  
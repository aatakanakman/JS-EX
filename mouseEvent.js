const btn = document.querySelector('#btnDeleteAll')

const ul = document.querySelector('#task-list')

// btn.addEventListener('click',eventHandler)
// ul.addEventListener('click',eventHandler)


// //Double click

// btn.addEventListener('dblclick',eventHandler)


// //Mouse down

// btn.addEventListener('mousedown',eventHandler)

// //Mouse up

// btn.addEventListener('mouseup',eventHandler)

// //Mouse enter

// ul.addEventListener('mouseenter',eventHandler)

// //Mouse leave

// ul.addEventListener('mouseleave',eventHandler)

// //Mouse over

// ul.addEventListener('mouseover',eventHandler)


// //Mouse out

// ul.addEventListener('mouseout',eventHandler)


//Mouse movec

const h5 = document.querySelector('h5')
ul.addEventListener('mousemove',eventHandler)


function eventHandler(event){
    console.log(`Event type : ${event.type}`)

    h5.textContent = `Mouse x : ${event.offsetX} Mouse y : ${event.offsetY}`
}
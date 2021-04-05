const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie')
const seats = document.querySelectorAll('.seat:not(.reserved)');

getFromLocalStorage();
calculateTotal();

container.addEventListener('click',function(e){

    //Class listesi içerisinde seat olanı ve reserved olmayan elemana
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')){
    //class listine varsa selected sil, yoksa ekle (toggle => çift taraflı işlem yapma.)
        e.target.classList.toggle('selected'); 
        calculateTotal();
    }
})

select.addEventListener('change',function(e){
    calculateTotal();
})


function calculateTotal(){
    const selectedSeats = container.querySelectorAll('.seat.selected');

    const selectedSeatsArr = [];
    const seatsArr = [];

    selectedSeats.forEach(function(seat){
        selectedSeatsArr.push(seat);
    });

    seats.forEach(function(seat){
        seatsArr.push(seat);
    })

    //[1,3,5]
    let selectedSeatIndexs = selectedSeatsArr.map(function(seat){
        return seatsArr.indexOf(seat);
    })

    let selectedSeatCount = selectedSeats.length
    amount.innerText = selectedSeatCount*select.value;
    count.innerText = selectedSeatCount;


    saveToLocalStorage(selectedSeatIndexs);
}

function getFromLocalStorage(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if(selectedSeats != null && selectedSeats.length > 0 ){
        seats.forEach(function(seat,index){
            if(selectedSeats.indexOf(index) > -1){
                seat.classList.add('selected');
            }
        })
    }



    const selectedMovieIndex = localStorage.getItem('selectedMovie');

    if(selectedMovieIndex != null){
        select.selectedIndex = selectedMovieIndex;
    }
}


function saveToLocalStorage(indexs){
    localStorage.setItem('selectedSeats', JSON.stringify(indexs));
    localStorage.setItem('selectedMovie', select.selectedIndex)
}


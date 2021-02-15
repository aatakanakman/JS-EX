function Question(hobby){
    switch(hobby){
        case 'car':
            return function(name){
                console.log(name + ' do you have a car ?');
            }
        break;

        case 'book':
            return function(name){
                console.log(name + ' What is your favorite book');
            }
        break;

        case 'software':
            return function(name,type){
                console.log(name + ' Are you interested in '+ type+ '?');
            }
        break;

        default:
            return function(name){
                console.log(name + ' have are you');
            }
    }
}

var carQuestion = Question('car')

carQuestion('ATAKAN')

var bookQuestion = Question('book')

bookQuestion('Akman')

var softQues = Question('software')

softQues('Ali','Nodejs')
softQues('Fatih','HTML and CSS')
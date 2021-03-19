var url = 'http://logger.io/logger';

var name = 'Atakan AKMAN';


function log(message){
    console.log(message);
}

//Dışarıya açıyoruz.
module.exports = {
    name : name,
    log : log
};

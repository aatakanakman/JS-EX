//Fetch Api fonksiyonlardan geriye bir promise döndürmeye gerek kalmıyor.

//text

function getText(){
    fetch('text.txt')
    .then(response => {
       return response.text();
    }).then(data => {
        console.log(data);
    }).catch(error => {
        console.log(error);
    })
}

//getText()


//Json


function getJson(){
    fetch("products.json")
    .then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    })
}

//getJson()



//External api 

function getExternelApi(){
    fetch('https://randomuser.me/api/?results=5')
        .then(data => {
            return data.json()
        }).then(users => {
            var html = "";
            users.results.forEach( user => {
                
                html +=
                 `
                    <div>
                        <img src="${user.picture.medium}">
                        <div>
                            ${user.name.first}
                            ${user.name.last}
                        </div>
                    </div>
                `
            });
            document.querySelector('#users').innerHTML = html;

        }).catch(err => {
            console.log(err);
        })
}
//getExternelApi()


function PostExternelApi(){

    const url = "https://jsonplaceholder.typicode.com/todos/"

    var data = {
        method : "POST",
        body : JSON.stringify({
            userId : 1,
            title : "Sample title",
            body : "Sample body"
        }),
        header : new Headers({
            'content-type' : "application/json"
        })
    }

    fetch(url,data)
        .then(res => {
            console.log(res);
        });

}

PostExternelApi()
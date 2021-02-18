let myObj = {
    url : "https://randomuser.me/api/?results=5"
}


let request = obj => {

    return new Promise((resolve,reject)=>{
        
        let xhr = new XMLHttpRequest();
        

        xhr.open(obj.method || 'GET',obj.url,)

        if(xhr.header){
            Object.keys[obj.headers].forEach(key =>{

                xhr.setRequestHeader(key,obj.header[key])
                
            });
        }

        xhr.onload = ()=> {
            if(xhr.status >= 200 && xhr.status <= 300){
                resolve(xhr.response);
            }else{
                reject(xhr.statusText);
            }
        }
        xhr.onerror = () => {
            reject(xhr.statusText);
        }

        xhr.send(obj.body)
    })

}

let buildHtml = function(data){

    let users = JSON.parse(data)
    console.log(users.results);

    let html ="";

    users.results.forEach(user => {
        html+= `
            <div>
                <img src="${user.picture.medium}">
                <div>
                    ${user.name.title} 
                    ${user.name.first} 
                    ${user.name.last} 
                </div>
            </div>
        `
    })

    document.querySelector('#users').innerHTML = html;

    return Promise.resolve('Html is loaded')
}

request(myObj)
    .then(buildHtml).then(msg => {
        console.log(msg);
    }).catch(error => {
        console.log(error);
    })
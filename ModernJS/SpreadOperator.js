function GetTotal(a,b,c){
    return a+b+c;
}

console.log(GetTotal(1,2,3));

let numbers = [1,2,3];

// ES5

console.log(GetTotal.apply(null,numbers));

//ES6

console.log(GetTotal(...numbers));


let arr1 = ['two','three'];
let arr2 = ['one','four','five'];
let arr3 = ['one',...arr1,'four','five'];

// arr1.push(...arr2);
// arr1.unshift(...arr2)

// let arr3 = ['one',...arr1,'four','five'];

console.log(arr3);

let h1 = document.querySelector('h1');
let divs = document.querySelectorAll('div')

let tags = [h1,...divs];

tags.forEach(tag=> tag.style.color = 'red')

console.log(tags);


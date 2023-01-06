document.addEventListener("DOMContentLoaded",()=>{
function head(){
    let newElement = document.createElement('header');
    document.body.append(newElement); 
    newElement.innerHTML = `
    <h1>Ice and Fire API Fetch</h1>`
}
head()
function main(){
  let newDivision = document.createElement('main');
    document.body.append(newDivision);
    newDivision.setAttribute("class","main");  
}
main();

function foot(){
    let newElement = document.createElement('footer');
    document.body.appendChild(newElement);
    newElement.setAttribute("class","foot")
    newElement.innerHTML = ``
}
foot()

//Book 1 Card:

let book1Data = ""
async function fetchData(){
    try {
    let res = await fetch("https://www.anapioficeandfire.com/api/books/1",{method:"GET"});
    let value = await res.json();
     book1Data = {
        name : value.name,
        isbn : value.isbn,
        number_of_pgs : value.numberOfPages,
        authors : value.authors,
        publishers : value.publisher,
        realeaseDate : (value.released).slice(0,10)
    }

} catch (error) {
    console.log(error);
}}
fetchData();

let book1char1 =""
async function char1book1(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/2",{method:"GET"});
       let data = await res.json();
       book1char1 =  data.name;
    }
    catch (error) {
        console.log(error)
    }
}
char1book1();

let book1char2 ="";
async function char2book1(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/12",{method:"GET"});
       let data = await res.json();
       book1char2 =  data.name;
    }
    catch (error) {
        console.log(error)
    }
}
char2book1();

let book1char3 ="";
async function char3book1(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/13",{method:"GET"});
       let data = await res.json();
       book1char3 =  data.name;
    }
    catch (error) {
        console.log(error)
    }
}
char3book1();

let book1char4 ="";
async function char4book1(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/16",{method:"GET"});
       let data = await res.json();
       book1char4 =  data.name;
    }
    catch (error) {
        console.log(error)
    }
}
char4book1();

let book1char5 ="";
async function char5book1(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/20",{method:"GET"});
       let data = await res.json();
       book1char5 =  data.name;
       book1Required(book1Data,book1char1,book1char2,book1char3,book1char4,book1char5);
    }
    catch (error) {
        console.log(error)
    }
}
char5book1();

function book1Required({name,isbn,number_of_pgs,authors,publishers,realeaseDate},book1char1,book1char2,book1char3,book1char4,book1char5){  
    let mainDiv = document.querySelector(".main")
    mainDiv.innerHTML += 
    `<div class="container">
         <div class="info">
            <h1 id="name">${name}</h1>
            <p class = "details"><span>ISBN: </span>${isbn}</p>
            <p class = "details"><span>Number of pages: </span>${number_of_pgs}</p>
            <p class = "details"><span>Authors: </span>${authors}</p>
            <p class = "details"><span>Publisher Name: </span>${publishers}</p>
            <p class = "details"><span>Released Date: </span>${realeaseDate}</p>
            <h3>Characters</h3> 
            <p class = "details">${book1char1}</p>
            <p class = "details">${book1char2}</p>
            <p class = "details">${book1char3}</p>
            <p class = "details">${book1char4}</p>
            <p class = "details">${book1char5}</p>  
        </div>
        </div>` 
}

//book 2 Card:

let book2Data = "";
async function fetchData2(){
    try {
    let res = await fetch("https://www.anapioficeandfire.com/api/books/2",{method:"GET"});
    let value = await res.json();
     book2Data = {
        name : value.name,
        isbn : value.isbn,
        number_of_pgs : value.numberOfPages,
        authors : value.authors,
        publishers : value.publisher,
        realeaseDate : (value.released).slice(0,10)
    }

} catch (error) {
    console.log(error);
}}

fetchData2();

let book2char1 ="";
async function char1book2(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/23",{method:"GET"});
       let data = await res.json();
       book2char1 =  data.name;
    }
    catch (error) {
        console.log(error)
    }
}
char1book2();

let book2char2 ="";
async function char2book2(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/27",{method:"GET"});
       let data = await res.json();
       book2char2 =  data.name;
    }
    catch (error) {
        console.log(error)
    }
}
char2book2();

let book2char3 ="";
async function char3book2(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/31",{method:"GET"});
       let data = await res.json();
       book2char3 =  data.name;
    }
    catch (error) {
        console.log(error)
    }
}
char3book2();

let book2char4 ="";
async function char4book2(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/36",{method:"GET"});
       let data = await res.json();
       book2char4 =  data.name;
    }
    catch (error) {
        console.log(error)
    }
}
char4book2();

let book2char5 ="";
async function char5book2(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/37",{method:"GET"});
       let data = await res.json();
       book2char5 =  data.name;
       book2Required(book2Data,book2char1,book2char2,book2char3,book2char4,book2char5);
    }
    catch (error) {
        console.log(error)
    }
}
char5book2();

function book2Required({name,isbn,number_of_pgs,authors,publishers,realeaseDate},book2char1,book2char2,book2char3,book2char4,book2char5){  
    let mainDiv = document.querySelector(".main")
    mainDiv.innerHTML += 
    `<div class="container">
         <div class="info">
            <h1 id="name">${name}</h1>
            <p class = "details"><span>ISBN: </span>${isbn}</p>
            <p class = "details"><span>Number of pages: </span>${number_of_pgs}</p>
            <p class = "details"><span>Authors: </span>${authors}</p>
            <p class = "details"><span>Publisher Name: </span>${publishers}</p>
            <p class = "details"><span>Released Date: </span>${realeaseDate}</p>
            <h3>Characters</h3>
            <p class = "details">${book2char1}</p>
            <p class = "details">${book2char2}</p>
            <p class = "details">${book2char3}</p>
            <p class = "details">${book2char4}</p>
            <p class = "details">${book2char5}</p>
        </div>
        </div>` 
}

//Book 3 Card:

let book3Data = ""
async function fetchData3(){
    try {
    let res = await fetch("https://www.anapioficeandfire.com/api/books/3",{method:"GET"});
    let value = await res.json();
     book3Data = {
        name : value.name,
        isbn : value.isbn,
        number_of_pgs : value.numberOfPages,
        authors : value.authors,
        publishers : value.publisher,
        realeaseDate : (value.released).slice(0,10)
    }
} catch (error) {
    console.log(error);
}} 
fetchData3();

let book3char1 =""
async function char1book3(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/38",{method:"GET"});
       let data = await res.json();
       book3char1 =  data.name;
    }
    
    catch (error) {
        console.log(error)
    }
}
char1book3();

let book3char2 ="";
async function char2book3(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/39",{method:"GET"});
       let data = await res.json();
       book3char2 =  data.name;
    }
    
    catch (error) {
        console.log(error)
    }
}
char2book3();

let book3char3 ="";
async function char3book3(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/40",{method:"GET"});
       let data = await res.json();
       book3char3 =  data.name;
    }
    catch (error) {
        console.log(error)
    }
}
char3book3();

let book3char4 ="";
async function char4book3(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/41",{method:"GET"});
       let data = await res.json();
       book3char4 =  data.name;
    }
    catch (error) {
        console.log(error)
    }
}
char4book3();

let book3char5 ="";
async function char5book3(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/42",{method:"GET"});
       let data = await res.json();
       book3char5 =  data.name;
       book3Required(book3Data,book3char1,book3char2,book3char3,book3char4,book3char5);
    }
    catch (error) {
        console.log(error)
    }
}
char5book3();

function book3Required({name,isbn,number_of_pgs,authors,publishers,realeaseDate},book3char1,book3char2,book3char3,book3char4,book3char5){  
    let mainDiv = document.querySelector(".main")
    mainDiv.innerHTML += 
    `<div class="container">
         <div class="info">
            <h1 id="name">${name}</h1>
            <p class = "details"><span>ISBN: </span>${isbn}</p>
            <p class = "details"><span>Number of pages: </span>${number_of_pgs}</p>
            <p class = "details"><span>Authors: </span>${authors}</p>
            <p class = "details"><span>Publisher Name: </span>${publishers}</p>
            <p class = "details"><span>Released Date: </span>${realeaseDate}</p>
            <h3>Characters</h3>
            <p class = "details">${book3char1}</p>
            <p class = "details">${book3char2}</p>
            <p class = "details">${book3char3}</p>
            <p class = "details">${book3char4}</p>
            <p class = "details">${book3char5}</p>
        </div>
        </div>` 
}

//Book 4 Card:

let book4Data = ""
async function fetchData4(){
    try {
    let res = await fetch("https://www.anapioficeandfire.com/api/books/4",{method:"GET"});
    let value = await res.json();
     book4Data = {
        name : value.name,
        isbn : value.isbn,
        number_of_pgs : value.numberOfPages,
        authors : value.authors,
        publishers : value.publisher,
        realeaseDate : (value.released).slice(0,10)
    }

} catch (error) {
    console.log(error);
}}


fetchData4();

let book4char1 =""
async function char1book4(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/121",{method:"GET"});
       let data = await res.json();
       book4char1 =  data.name;
    }
    
    catch (error) {
        console.log(error)
    }
}
char1book4();

let book4char2 ="";
async function char2book4(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/132",{method:"GET"});
       let data = await res.json();
       book4char2 =  data.name;
    }
    
    catch (error) {
        console.log(error)
    }
}
char2book4();

let book4char3 ="";
async function char3book4(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/161",{method:"GET"});
       let data = await res.json();
       book4char3 =  data.name;
    }
    catch (error) {
        console.log(error)
    }
}
char3book4();

let book4char4 ="";
async function char4book4(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/274",{method:"GET"});
       let data = await res.json();
       book4char4 =  data.name;
    }
    catch (error) {
        console.log(error)
    }
}
char4book4();

let book4char5 ="";
async function char5book4(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/276",{method:"GET"});
       let data = await res.json();
       book4char5 =  data.name;
       book4Required(book4Data,book4char1,book4char2,book4char3,book4char4,book4char5);
    }
    catch (error) {
        console.log(error)
    }
}
char5book4();

function book4Required({name,isbn,number_of_pgs,authors,publishers,realeaseDate},book4char1,book4char2,book4char3,book4char4,book4char5){  
    let mainDiv = document.querySelector(".main")
    mainDiv.innerHTML += 
    `<div class="container">
         <div class="info">
            <h1 id="name">${name}</h1>
            <p class = "details"><span>ISBN: </span>${isbn}</p>
            <p class = "details"><span>Number of pages: </span>${number_of_pgs}</p>
            <p class = "details"><span>Authors: </span>${authors}</p>
            <p class = "details"><span>Publisher Name: </span>${publishers}</p>
            <p class = "details"><span>Released Date: </span>${realeaseDate}</p>
            <h3>Characters</h3>
            <p class = "details">${book4char1}</p>
            <p class = "details">${book4char2}</p>
            <p class = "details">${book4char3}</p>
            <p class = "details">${book4char4}</p>
            <p class = "details">${book4char5}</p>
        </div>
        </div>` 
}

//Book 5 Card:

let book5Data = ""
async function fetchData5(){
    try {
    let res = await fetch("https://www.anapioficeandfire.com/api/books/5",{method:"GET"});
    let value = await res.json();
     book5Data = {
        name : value.name,
        isbn : value.isbn,
        number_of_pgs : value.numberOfPages,
        authors : value.authors,
        publishers : value.publisher,
        realeaseDate : (value.released).slice(0,10)
    }

} catch (error) {
    console.log(error);
}}


fetchData5();

let book5char1 =""
async function char1book5(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/158",{method:"GET"});
       let data = await res.json();
       book5char1 =  data.name;
    }
    
    catch (error) {
        console.log(error)
    }
}
char1book5();

let book5char2 ="";
async function char2book5(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/159",{method:"GET"});
       let data = await res.json();
       book5char2 =  data.name;
    }
    
    catch (error) {
        console.log(error)
    }
}
char2book5();

let book5char3 ="";
async function char3book5(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/160",{method:"GET"});
       let data = await res.json();
       book5char3 =  data.name;
    }
    catch (error) {
        console.log(error)
    }
}
char3book5();

let book5char4 ="";
async function char4book5(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/162",{method:"GET"});
       let data = await res.json();
       book5char4 =  data.name;
    }
    catch (error) {
        console.log(error)
    }
}
char4book5();

let book5char5 ="";
async function char5book5(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/163",{method:"GET"});
       let data = await res.json();
       book5char5 =  data.name;
       book5Required(book5Data,book5char1,book5char2,book5char3,book5char4,book5char5);
    }
    catch (error) {
        console.log(error)
    }
}
char5book5();

function book5Required({name,isbn,number_of_pgs,authors,publishers,realeaseDate},book5char1,book5char2,book5char3,book5char4,book5char5){  
    let mainDiv = document.querySelector(".main")
    mainDiv.innerHTML += 
    `<div class="container">
         <div class="info">
            <h1 id="name">${name}</h1>
            <p class = "details"><span>ISBN: </span>${isbn}</p>
            <p class = "details"><span>Number of pages: </span>${number_of_pgs}</p>
            <p class = "details"><span>Authors: </span>${authors}</p>
            <p class = "details"><span>Publisher Name: </span>${publishers}</p>
            <p class = "details"><span>Released Date: </span>${realeaseDate}</p>
            <h3>Characters</h3>
            <p class = "details">${book5char1}</p>
            <p class = "details">${book5char2}</p>
            <p class = "details">${book5char3}</p>
            <p class = "details">${book5char4}</p>
            <p class = "details">${book5char5}</p>
        </div>
        </div>` 
}

//Book 6 Card:

let book6Data = ""
async function fetchData6(){
    try {
    let res = await fetch("https://www.anapioficeandfire.com/api/books/6",{method:"GET"});
    let value = await res.json();
     book6Data = {
        name : value.name,
        isbn : value.isbn,
        number_of_pgs : value.numberOfPages,
        authors : value.authors,
        publishers : value.publisher,
        realeaseDate : (value.released).slice(0,10)
    }

} catch (error) {
    console.log(error);
}}


fetchData6();

let book6char1 =""
async function char1book6(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/353",{method:"GET"});
       let data = await res.json();
       book6char1 =  data.name;
    }
    
    catch (error) {
        console.log(error)
    }
}
char1book6();

let book6char2 ="";
async function char2book6(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/388",{method:"GET"});
       let data = await res.json();
       book6char2 =  data.name;
    }
    
    catch (error) {
        console.log(error)
    }
}
char2book6();

let book6char3 ="";
async function char3book6(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/422",{method:"GET"});
       let data = await res.json();
       book6char3 =  data.name;
    }
    catch (error) {
        console.log(error)
    }
}
char3book6();

let book6char4 ="";
async function char4book6(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/431",{method:"GET"});
       let data = await res.json();
       book6char4 =  data.name;
    }
    catch (error) {
        console.log(error)
    }
}
char4book6();

let book6char5 ="";
async function char5book6(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/447",{method:"GET"});
       let data = await res.json();
       book6char5 =  data.name;
       book6Required(book6Data,book6char1,book6char2,book6char3,book6char4,book6char5);
    }
    catch (error) {
        console.log(error)
    }
}
char5book6();

function book6Required({name,isbn,number_of_pgs,authors,publishers,realeaseDate},book6char1,book6char2,book6char3,book6char4,book6char5){  
    let mainDiv = document.querySelector(".main")
    mainDiv.innerHTML += 
    `<div class="container">
         <div class="info">
            <h1 id="name">${name}</h1>
            <p class = "details"><span>ISBN: </span>${isbn}</p>
            <p class = "details"><span>Number of pages: </span>${number_of_pgs}</p>
            <p class = "details"><span>Authors: </span>${authors}</p>
            <p class = "details"><span>Publisher Name: </span>${publishers}</p>
            <p class = "details"><span>Released Date: </span>${realeaseDate}</p>
            <h3>Characters</h3>
            <p class = "details">${book6char1}</p>
            <p class = "details">${book6char2}</p>
            <p class = "details">${book6char3}</p>
            <p class = "details">${book6char4}</p>
            <p class = "details">${book6char5}</p>
        </div>
        </div>` 
}



//Book 7 Card

let book7Data = ""
async function fetchData7(){
    try {
    let res = await fetch("https://www.anapioficeandfire.com/api/books/7",{method:"GET"});
    let value = await res.json();
     book7Data = {
        name : value.name,
        isbn : value.isbn,
        number_of_pgs : value.numberOfPages,
        authors : value.authors,
        publishers : value.publisher,
        realeaseDate : (value.released).slice(0,10)
    }

} catch (error) {
    console.log(error);
}}


fetchData7();

let book7char1 =""
async function char1book7(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/623",{method:"GET"});
       let data = await res.json();
       book7char1 =  data.name;
    }
    
    catch (error) {
        console.log(error)
    }
}
char1book7();

let book7char2 ="";
async function char2book7(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/655",{method:"GET"});
       let data = await res.json();
       book7char2 =  data.name;
    }
    
    catch (error) {
        console.log(error)
    }
}
char2book7();

let book7char3 ="";
async function char3book7(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/695",{method:"GET"});
       let data = await res.json();
       book7char3 =  data.name;
    }
    catch (error) {
        console.log(error)
    }
}
char3book7();

let book7char4 ="";
async function char4book7(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/729",{method:"GET"});
       let data = await res.json();
       book7char4 =  data.name;
    }
    catch (error) {
        console.log(error)
    }
}
char4book7();

let book7char5 ="";
async function char5book7(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/732",{method:"GET"});
       let data = await res.json();
       book7char5 =  data.name;
       book7Required(book7Data,book7char1,book7char2,book7char3,book7char4,book7char5);
    }
    catch (error) {
        console.log(error)
    }
}
char5book7();

function book7Required({name,isbn,number_of_pgs,authors,publishers,realeaseDate},book7char1,book7char2,book7char3,book7char4,book7char5){  
    let mainDiv = document.querySelector(".main")
    mainDiv.innerHTML += 
    `<div class="container">
         <div class="info">
            <h1 id="name">${name}</h1>
            <p class = "details"><span>ISBN: </span>${isbn}</p>
            <p class = "details"><span>Number of pages: </span>${number_of_pgs}</p>
            <p class = "details"><span>Authors: </span>${authors}</p>
            <p class = "details"><span>Publisher Name: </span>${publishers}</p>
            <p class = "details"><span>Released Date: </span>${realeaseDate}</p>
            <h3>Characters</h3>
            <p class = "details">${book7char1}</p>
            <p class = "details">${book7char2}</p>
            <p class = "details">${book7char3}</p>
            <p class = "details">${book7char4}</p>
            <p class = "details">${book7char5}</p>
        </div>
        </div>` 
}


//Book 8 Card:

let book8Data = ""
async function fetchData8(){
    try {
    let res = await fetch("https://www.anapioficeandfire.com/api/books/8",{method:"GET"});
    let value = await res.json();
     book8Data = {
        name : value.name,
        isbn : value.isbn,
        number_of_pgs : value.numberOfPages,
        authors : value.authors,
        publishers : value.publisher,
        realeaseDate : (value.released).slice(0,10)
    }

} catch (error) {
    console.log(error);
}}


fetchData8();

let book8char1 =""
async function char1book8(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/868",{method:"GET"});
       let data = await res.json();
       book8char1 =  data.name;
    }
    
    catch (error) {
        console.log(error)
    }
}
char1book8();

let book8char2 ="";
async function char2book8(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/921",{method:"GET"});
       let data = await res.json();
       book8char2 =  data.name;
    }
    
    catch (error) {
        console.log(error)
    }
}
char2book8();

let book8char3 ="";
async function char3book8(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/1048",{method:"GET"});
       let data = await res.json();
       book8char3 =  data.name;
    }
    catch (error) {
        console.log(error)
    }
}
char3book8();

let book8char4 ="";
async function char4book8(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/1065",{method:"GET"});
       let data = await res.json();
       book8char4 =  data.name;
    }
    catch (error) {
        console.log(error)
    }
}
char4book8();

let book8char5 ="";
async function char5book8(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/1067",{method:"GET"});
       let data = await res.json();
       book8char5 =  data.name;
       book8Required(book8Data,book8char1,book8char2,book8char3,book8char4,book8char5);
    }
    catch (error) {
        console.log(error)
    }
}
char5book8();

function book8Required({name,isbn,number_of_pgs,authors,publishers,realeaseDate},book8char1,book8char2,book8char3,book8char4,book8char5){  
    let mainDiv = document.querySelector(".main")
    mainDiv.innerHTML += 
    `<div class="container">
         <div class="info">
            <h1 id="name">${name}</h1>
            <p class = "details"><span>ISBN: </span>${isbn}</p>
            <p class = "details"><span>Number of pages: </span>${number_of_pgs}</p>
            <p class = "details"><span>Authors: </span>${authors}</p>
            <p class = "details"><span>Publisher Name: </span>${publishers}</p>
            <p class = "details"><span>Released Date: </span>${realeaseDate}</p>
            <h3>Characters</h3>
            <p class = "details">${book8char1}</p>
            <p class = "details">${book8char2}</p>
            <p class = "details">${book8char3}</p>
            <p class = "details">${book8char4}</p>
            <p class = "details">${book8char5}</p>
        </div>
        </div>` 
}

//Book 9 Card:

let book9Data = ""
async function fetchData9(){
    try {
    let res = await fetch("https://www.anapioficeandfire.com/api/books/9",{method:"GET"});
    let value = await res.json();
     book9Data = {
        name : value.name,
        isbn : value.isbn,
        number_of_pgs : value.numberOfPages,
        authors : value.authors,
        publishers : value.publisher,
        realeaseDate : (value.released).slice(0,10)
    }

} catch (error) {
    console.log(error);
}}


fetchData9();

let book9char1 =""
async function char1book9(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/1050",{method:"GET"});
       let data = await res.json();
       book9char1 =  data.name;
    }
    
    catch (error) {
        console.log(error)
    }
}
char1book9();

let book9char2 ="";
async function char2book9(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/1076",{method:"GET"});
       let data = await res.json();
       book9char2 =  data.name;
    }
    
    catch (error) {
        console.log(error)
    }
}
char2book9();

let book9char3 ="";
async function char3book9(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/1077",{method:"GET"});
       let data = await res.json();
       book9char3 =  data.name;
    }
    catch (error) {
        console.log(error)
    }
}
char3book9();

let book9char4 ="";
async function char4book9(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/1119",{method:"GET"});
       let data = await res.json();
       book9char4 =  data.name;
    }
    catch (error) {
        console.log(error)
    }
}
char4book9();

let book9char5 ="";
async function char5book9(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/1319",{method:"GET"});
       let data = await res.json();
       book9char5 =  data.name;
       book9Required(book9Data,book9char1,book9char2,book9char3,book9char4,book9char5);
    }
    catch (error) {
        console.log(error)
    }
}
char5book9();

function book9Required({name,isbn,number_of_pgs,authors,publishers,realeaseDate},book9char1,book9char2,book9char3,book9char4,book9char5){  
    let mainDiv = document.querySelector(".main")
    mainDiv.innerHTML += 
    `<div class="container">
         <div class="info">
            <h1 id="name">${name}</h1>
            <p class = "details"><span>ISBN: </span>${isbn}</p>
            <p class = "details"><span>Number of pages: </span>${number_of_pgs}</p>
            <p class = "details"><span>Authors: </span>${authors}</p>
            <p class = "details"><span>Publisher Name: </span>${publishers}</p>
            <p class = "details"><span>Released Date: </span>${realeaseDate}</p>
            <h3>Characters</h3>
            <p class = "details">${book9char1}</p>
            <p class = "details">${book9char2}</p>
            <p class = "details">${book9char3}</p>
            <p class = "details">${book9char4}</p>
            <p class = "details">${book9char5}</p>
        </div>
        </div>` 
}

//Book 10 Card:

let book10Data = ""
async function fetchData10(){
    try {
    let res = await fetch("https://www.anapioficeandfire.com/api/books/10",{method:"GET"});
    let value = await res.json();
     book10Data = {
        name : value.name,
        isbn : value.isbn,
        number_of_pgs : value.numberOfPages,
        authors : value.authors,
        publishers : value.publisher,
        realeaseDate : (value.released).slice(0,10)
    }

} catch (error) {
    console.log(error);
}}


fetchData10();

let book10char1 =""
async function char1book10(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/1833",{method:"GET"});
       let data = await res.json();
       book10char1 =  data.name;
    }
    
    catch (error) {
        console.log(error)
    }
}
char1book10();

let book10char2 ="";
async function char2book10(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/1850",{method:"GET"});
       let data = await res.json();
       book10char2 =  data.name;
    }
    
    catch (error) {
        console.log(error)
    }
}
char2book10();

let book10char3 ="";
async function char3book10(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/1884",{method:"GET"});
       let data = await res.json();
       book10char3 =  data.name;
    }
    catch (error) {
        console.log(error)
    }
}
char3book10();

let book10char4 ="";
async function char4book10(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/1912",{method:"GET"});
       let data = await res.json();
       book10char4 =  data.name;
    }
    catch (error) {
        console.log(error)
    }
}
char4book10();

let book10char5 ="";
async function char5book10(){
    try {
       let res = await fetch("https://www.anapioficeandfire.com/api/characters/2138",{method:"GET"});
       let data = await res.json();
       book10char5 =  data.name;
       book10Required(book10Data,book10char1,book10char2,book10char3,book10char4,book10char5);
    }
    catch (error) {
        console.log(error)
    }
}
char5book10();

function book10Required({name,isbn,number_of_pgs,authors,publishers,realeaseDate},book10char1,book10char2,book10char3,book10char4,book10char5){  
    let mainDiv = document.querySelector(".main")
    mainDiv.innerHTML += 
    `<div class="container">
         <div class="info">
            <h1 id="name">${name}</h1>
            <p class = "details"><span>ISBN: </span>${isbn}</p>
            <p class = "details"><span>Number of pages: </span>${number_of_pgs}</p>
            <p class = "details"><span>Authors: </span>${authors}</p>
            <p class = "details"><span>Publisher Name: </span>${publishers}</p>
            <p class = "details"><span>Released Date: </span>${realeaseDate}</p>
            <h3>Characters</h3>
            <p class = "details">${book10char1}</p>
            <p class = "details">${book10char2}</p>
            <p class = "details">${book10char3}</p>
            <p class = "details">${book10char4}</p>
            <p class = "details">${book10char5}</p>
        </div>
        </div>` 
}

//Pagination Codes
function footRequired(){
    let newFooter = document.querySelector(".foot");
    newFooter.innerHTML =  `
    <div class="container1">
           <div class="btn">
               <button onclick="preBtn()" id="btn1">prev</button>
               <button onclick="activeList(event)" type="button" class="link active" value="1" id="btn1">1</button>
               <button onclick="activeList(event)" type="button" class="link" value="2" id="btn1">2</button>
               <button onclick="activeList(event)" type="button" class="link" value="3" id="btn1">3</button>
               <button onclick="activeList(event)" type="button" class="link" value="4" id="btn1">4</button>
               <button onclick="activeList(event)" type="button" class="link" value="5" id="btn1">5</button>
               <button onclick="activeList(event)" type="button" class="link" value="6" id="btn1">6</button>
               <button onclick="nextBtn()" id="btn1">next</button>
           </div>
       </div>`
}
footRequired();

let link = document.getElementsByClassName("link");
let currentValue = 1;
function activeList(event){
    for(i of link){
        i.classList.remove("active");
    }
    event.target.classList.add("active");
    currentValue = event.target.value; 
}
function preBtn(){
    if(currentValue>1){
        for(i of link){
            i.classList.remove("active");
        }
        currentValue--;
        link[currentValue-1].classList.add("active");
    }
}
preBtn()


function nextBtn(){
    if(currentValue<6){
        for(i of link){
            i.classList.remove("active");
        }
        currentValue++;
        link[currentValue-1].classList.add("active");
    }
}
nextBtn();






})


console.log(document)

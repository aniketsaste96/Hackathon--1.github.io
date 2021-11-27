//Create element by DOM
const body = document.body;
const container = document.createElement("div")


body.append(container);


var h1 = document.createElement("h1")
h1.innerHTML = "&#128062; Search Your Cat !!!&#x1F43E;"

container.appendChild(h1);




//create form and add required attributes
var form = document.createElement("form")
form.className = "form"

container.appendChild(form);

const div = document.createElement("div")
div.id = "searchwrapper"
container.append(div);

const input = document.createElement("input")
input.type = "text"

input.id = "searchBar"
input.name = "searchbox"
input.placeholder = "Type Here..."
input.onkeyup = "search()"

div.append(input);

form.append(div);





//div for adding feteched images and data
const div2 = document.createElement("div");
const ul = document.createElement("ul");

container.appendChild(div2);
ul.id = "cat_List"
div2.append(ul);


//toggle button
/* 
const toggle = document.createElement("button");
toggle.id = "toggle"
toggle.textContent = "Dark Mode"
body.append(toggle); */











//getting hold of elementscl
var cat_List = document.getElementById("cat_List")
var SearchBar = document.getElementById("searchBar");
var submit = document.querySelector("#btn")



//keyup eventListener when we release button (listen each word)





const search = SearchBar.addEventListener("keyup", () => {
    var input = document.getElementById("searchBar").value;
    var li = document.getElementsByTagName("li");
    let innerText = document.getElementsByTagName("li");

    //Make SearchBar Operational 


    function myFunction() {
        var input, filter, ul, innerText, a, i, txtValue;
        input = document.getElementById("myInput");
        filter = SearchBar.value.toUpperCase();
        ul = document.getElementById("cat_List");
        innerText = ul.getElementsByTagName("li");
        for (i = 0; i < innerText.length; i++) {
            a = innerText[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                innerText[i].style.display = "";
            } else {
                innerText[i].style.display = "none";
            }
        }
    }
    myFunction();


})






//initializing URL from where we want to fetch data
var url = " https://cataas.com/api/cats";


/*

async function getData() {
    fetch(url)
        .then((result) => result.json())
        .then((data) => my_cats(data))
        .catch((error) => (error))

}
getData();


*/






//Using async await and ERROR handling....
const fetchData = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();



        let realdata = my_cats(data);
        //Append fetched data to body 
        function my_cats(data) {
            //Iterate through JSON data

            let Cat_data = data.map(item => {
                return `

            <li class="items">
                <a href="https://cataas.com/cat/${item.id}">
                <img src="https://cataas.com/cat/${item.id}"><br><br> <span class="badge badge-pill badge-dark">${item.tags}</span></a>
                 </img>                                                                        
                             
            </li>
            
            
        `

            })

            //add returned data of id after loop to catch_list
            cat_List.innerHTML = Cat_data;
        }



    } catch (err) {
        console.log("Opps Something Went Wrong!!!")
    }
};

fetchData();


















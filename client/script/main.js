const container = document.getElementsByClassName('container');
const content_container = document.getElementsByClassName('content__container');

const content = document.getElementsByClassName('content')

let arr = []

const mainApi = 'http://localhost:8080/api'
const fakeApi = 'http://localhost:8080/not-db'

function getData() {
    fetch(fakeApi)
        .then((res) => res.json())
        .then((data) => {
            arr.push(...data.message)
            console.log(data)
        })
        .catch((error) => console.error('Ошибка:', error)); 
}


function loadData(i) {
        content_container[i].innerHTML = `
        <div class="text__container"> 
            <div class="content">Date joined <br> ${new Date(arr[i].data).toLocaleDateString()}</div>
            <div class="content">Job title <br> ${arr[i].job_title}</div>
            <div class="content">Level <br> ${arr[i].level}</div>

            <div class="content">Address <br> ${arr[i].address}</div>
            <div class="content">Phone <br> ${arr[i].phone}</div>
            <div class="content">Email <br>${arr[i].email}</div>

            <div class="content">Skills <br>${arr[i].skills}</div>
            <div class="content">Languages <br>${arr[i].language}</div>
            <div class="content">Experience <br> ${arr[i].experience}</div>
        </div>
        <div class="img__container">
            <img src="image.png" alt="" class="">
        </div>
            
        `;
}
 
document.addEventListener('DOMContentLoaded', getData); 


for (let i = 0; i < container.length; i++){
    container[i].addEventListener('click', function () {

        const contentContainer = this.getElementsByClassName('content__container')[0];
        contentContainer.classList.toggle('active'); 
        loadData(i); 
        console.log(container[i]);
    });
}
    
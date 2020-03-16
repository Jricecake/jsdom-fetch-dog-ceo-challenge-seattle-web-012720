console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", function(){
    
    fetch(imgUrl).then(data => data.json()
    .then(json => showDogs(json.message)));
    fetch(breedUrl).then(data => data.json()
    .then(json => showDogBreeds(json)));
    
    const imageContainer = document.getElementById("dog-image-container");
    const breedList = document.getElementById("dog-breeds");
    
    function showDogs(dogArray){
        dogArray.forEach(url => {
            const image = document.createElement("img");
            image.src = url
            imageContainer.appendChild(image);
        });
    }
    function showDogBreeds(json){
        const breedObjs = json.message
        for (const breed in breedObjs){
            const newDiv = document.createElement("li");
            newDiv.innerText = breed;
            newDiv.addEventListener("click", function(){
                newDiv.style.color = "red"
            })
            breedList.appendChild(newDiv);
        }
    }

    const select = document.getElementById("breed-dropdown")
    select.addEventListener("change", event => {
        document.querySelectorAll('li').forEach(name => {
            name.style = "display: list-item"})
        let letter = event.target.value
        document.querySelectorAll('li').forEach(name => {
            if (letter == '') {
                name.style = "display: list-item";
            }
            else if (name.innerText[0] != letter) {
                name.style = "display: none"
            }
        })
    })


});

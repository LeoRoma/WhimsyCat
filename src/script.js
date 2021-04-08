const landingPageAlternate = document.querySelectorAll('.landingpage-alternate');
// console.log(landingPageAlternate[1])


landingPageAlternate[0].addEventListener('mouseover', () => {
    landingPageAlternate[0].style.opacity = "0";
    landingPageAlternate[1].style.opacity = "1";
})

landingPageAlternate[0].addEventListener('mouseout', () => {
    landingPageAlternate[0].style.opacity = "1";
    landingPageAlternate[1].style.opacity = "0";
})

fetch("https://api.thecatapi.com/v1/breeds?f16ad962-557b-4deb-b7ab-626cc52a45f9")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        getCats(data);
    })
    .catch(err => console.log("Error: ", err));

const track = document.querySelector('.carousel-track');

function getCats(cats){
    for(let i = 0; i < cats.length; i++){
        console.log(cats[i].description, cats[i].name, cats[i].origin, cats[i].image, cats[i].life_span, cats[i].temperament);
    }
    const kittens = cats.map((cat) => {
        return `
            <h1>${cat.name}</h1>
            <h2>${cat.origin}</h2>
            <h3>${cat.life_span}</h3>
            <h4>${cat.temperament}</h4>
            <p>${cat.description}</p>
      
        `
    }).join(" ");
    console.log(kittens)
    track.innerHTML = kittens;
}
      // <img src="https://cdn2.thecatapi.com/images/tJbzb7FKo.jpg" alt="kitten"></img> 
        // <img src="${cat.image.url}" alt="kitten" /> 
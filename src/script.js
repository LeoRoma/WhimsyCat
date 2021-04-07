const landingPageAlternate = document.querySelectorAll('.landingpage-alternate');
console.log(landingPageAlternate[1])


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
    .then(data => console.log(data))
    .catch(err => console.log("Error: ", err));
    
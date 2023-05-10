const apiKey = 'live_ZJsahnl5JD4xx6ZUHQHNn7Xbz60JE8fOQkkAZVIZS6gMPAfcAZjKBhCv02dnKJXR';

const catButton = document.getElementById('cat-button');
const catImage = document.getElementById('cat-image');

catButton.addEventListener('click', () => {
    fetch(`https://api.thecatapi.com/v1/images/search?api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const imageUrl = data[0].url;
            catImage.src = imageUrl;
        })
        .catch(error => console.error(error));
});
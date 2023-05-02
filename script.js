const form = document.querySelector('#search-form');
const searchBox = document.querySelector('#search-box');
const imageContainer = document.querySelector('#image-container');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const searchTerm = searchBox.value;
	searchImages(searchTerm);
});

async function searchImages(searchTerm) {
	const apiKey = '5jbyX2uhoPX3TJg5fDkY2VqrIbFeNeEeEHqwUvp8BuM'; // Replace with your own API key
	const apiUrl = `https://api.unsplash.com/search/photos?page=1&query=${searchTerm}&client_id=${apiKey}`;
	try {
		const response = await fetch(apiUrl);
		const data = await response.json();
		displayImages(data.results);
	} catch (error) {
		console.log(error);
	}
}

function displayImages(images) {
	imageContainer.innerHTML = '';
	images.forEach((image) => {
		const img = document.createElement('img');
		img.src = image.urls.regular;
		img.alt = image.alt_description;
		imageContainer.appendChild(img);
	});
}


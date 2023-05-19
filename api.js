async function buscar(){
const buscar = document.getElementById("buscar").value;
const url = `https://google-search72.p.rapidapi.com/search?query=${buscar}&gl=us&lr=en&num=10&start=0&sort=relevance`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '282e8ded6amsh389b2ead7fe7657p11c32cjsn6b13b7ade005',
		'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}
}




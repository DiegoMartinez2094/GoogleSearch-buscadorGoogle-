async function buscarGoogle(){
const buscar = document.getElementById("buscar").value;
const url = `https://google-search74.p.rapidapi.com/?query=${buscar}&limit=10&related_keywords=true`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '282e8ded6amsh389b2ead7fe7657p11c32cjsn6b13b7ade005',
		'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
    const wiki=result.results[0];

} catch (error) {
	console.error(error);
}
 }
async function buscarGoogle(){
const buscar = document.getElementById("barraBuscar").value;
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
    console.log(wiki)
    const description=result.results[0].description;
    console.log(description)
    document.getElementById("info").innerHTML = `
	<div class="container" >
	<div class="row">
		<div class="col-lg-2" style="padding-right: 0px; ">
			<img src="./imagenes/google.gif" alt="imagen google" style="height: 100px; padding-right: 0px;">
		</div>

		<div class="col-lg-6" style="margin-top: 50px; padding-left: 0%;  ">
			<input id="barraBuscar" type="text" class="form-control" aria-label="Username"
				aria-describedby="addon-wrapping" style="width: 600px;" />
		</div>
		<div class="col-lg-2"style="margin-top: 50px;">
			<button type="button" class="btn btn" onclick="buscarGoogle()" id="btnBuscarGoogle">
				Buscar en Google
			</button>
		</div>
		<div class="col-lg-2"style="margin-top: 50px;">
			<button type="button" class="btn btn" onclick="buscarImagenes()" id="btnBuscarImagenes">
				Buscar Imagenes
			</button>
		</div>
	</div>

	<div class="row">
		<h3>${description}</h3>
	</div>
</div> 
`;

} catch (error) {
	console.error(error);
}
 }
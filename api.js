//keys=
//ab588c178fmsha19d835278e2e57p1d9b36jsnf6e7e26376a7
//4d3abdd95amsh42b11a056be5dccp19703cjsn96a51d54275a
//3c3a7a1fa4msh0e92c078fd61424p137867jsnebb20098d172
async function buscarGoogle() {
	const buscar = document.getElementById("barraBuscar").value;
	const url = `https://google-search74.p.rapidapi.com/?query=${buscar}&limit=10&related_keywords=true`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'adaad128aemsh6cfb78feb6e838dp15a6d2jsn85a17c09c579',
			'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url, options);
		const result = await response.json();
		console.log(result);
		const numeroBusquedas = result.results.length;
		document.getElementById("info").innerHTML = `
	
	<div class="row" >
	
		<div class="col-lg-3" style="padding-right: 0px;width: 170px;">
			<img src="./imagenes/google.gif" alt="imagen google" style="height: 100px; padding-right: 0px;">
		</div>

		<div class="col-lg-3" style="margin-top: 50px; padding-left: 0%; width: 400px;">
			<input id="barraBuscar" type="text" class="form-control" aria-label="Username"
				aria-describedby="addon-wrapping" style="width: 400px;margin-left: 0px;" />
		</div>
		<div class="col-lg-3"style="margin-top: 50px;width: 200px">
			<button type="button" class="btn btn" onclick="buscarGoogle()" id="btnBuscarGoogle" style="margin-left: 0px;padding-left: 0px;">
				Buscar en Google
			</button>
		</div>
		<div class="col-lg-3"style="margin-top: 50px;width: 200px">
			<button type="button" class="btn btn" onclick="buscarImagenes()" id="btnBuscarImagenes" style="margin-left: 0px;padding-left: 0px;">
				Buscar imagenes
			</button>
		</div>
		
	</div>
       <br>

	<div style="margin-left:30px;">
		<div class="row">
		<span>Cerca de ${numeroBusquedas} resultados</span>
		<a href="${result.results[0].url}"style="text-decoration: none;"><h3>${result.results[0].title}</h3></a>
			<h6>${result.results[0].description}</h6>
		</div>
		<br>
		<div class="row">
		<a href="${result.results[1].url}"style="text-decoration: none;"><h3>${result.results[1].title}</h3></a>
			<h6>${result.results[1].description}</h6>
		</div>
		<br>
		<div class="row">
		<a href="${result.results[2].url}"style="text-decoration: none;"><h3>${result.results[2].title}</h3></a>
			<h6>${result.results[2].description}</h6>
		</div>
		<br>
		<div class="row">
		<a href="${result.results[3].url}"style="text-decoration: none;"><h3>${result.results[3].title}</h3></a>
			<h6>${result.results[3].description}</h6>
		</div>
		<br>
		<div class="row">
		<a href="${result.results[4].url}"style="text-decoration: none;"><h3>${result.results[4].title}</h3></a>
			<h6>${result.results[4].description}</h6>
		</div>
		<br>
		<div class="row">
		<a href="${result.results[5].url}"style="text-decoration: none;"><h3>${result.results[5].title}</h3></a>
			<h6>${result.results[5].description}</h6>
		</div>
		<br>
		<div class="row">
		<a href="${result.results[6].url}"style="text-decoration: none;"><h3>${result.results[6].title}</h3></a>
			<h6>${result.results[6].description}</h6>
		</div>
		<br>
		<div class="row">
		<a href="${result.results[7].url}"style="text-decoration: none;"><h3>${result.results[7].title}</h3></a>
			<h6>${result.results[7].description}</h6>
		</div>
		<br>
		<div class="row">
		<a href="${result.results[8].url}"style="text-decoration: none;"><h3>${result.results[8].title}</h3></a>
			<h6>${result.results[8].description}</h6>
		</div>
		<br>
	</div>`;

	} catch (error) {
		console.error(error);
	}
}





async function buscarImagenes() {
	const buscar = document.getElementById("barraBuscar").value;
	const url = `https://google-search72.p.rapidapi.com/imagesearch?query=${buscar}&gl=us&lr=en&num=10&start=0&sort=relevance`;
	const options = {
		method: 'GET',
		headers: {
			//ab588c178fmsha19d835278e2e57p1d9b36jsnf6e7e26376a7
			'X-RapidAPI-Key': 'adaad128aemsh6cfb78feb6e838dp15a6d2jsn85a17c09c579',
			'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url, options);
		const result = await response.json();
		console.log(result);
		console.log(result.items[0].originalImageUrl);
		document.getElementById("info").innerHTML = `
	
	<div class="row" >
	
		<div class="col-lg-3" style="padding-right: 0px;width: 170px;">
			<img src="./imagenes/google.gif" alt="imagen google" style="height: 100px; padding-right: 0px;">
		</div>

		<div class="col-lg-3" style="margin-top: 50px; padding-left: 0%; width: 400px;">
			<input id="barraBuscar" type="text" class="form-control" aria-label="Username"
				aria-describedby="addon-wrapping" style="width: 400px;margin-left: 0px;" />
		</div>
		<div class="col-lg-3"style="margin-top: 50px;width: 200px">
			<button type="button" class="btn btn" onclick="buscarGoogle()" id="btnBuscarGoogle" style="margin-left: 0px;padding-left: 0px;">
				Buscar en Google
			</button>
		</div>
		<div class="col-lg-3"style="margin-top: 50px;width: 200px">
			<button type="button" class="btn btn" onclick="buscarImagenes()" id="btnBuscarImagenes" style="margin-left: 0px;padding-left: 0px;">
				Buscar imagenes
			</button>
		</div>
		
	</div>
       <br>
	<div style="margin-left:30px;">
		<div class="row">
			<div class="col-1>
			<img src="${result.items[0].originalImageUrl}" alt="imagen de la busqueda">
			</div>
		</div>
		<br>
	</div>`;
		
	} catch (error) {
		console.error(error);
	}
}

//keys=
//ab588c178fmsha19d835278e2e57p1d9b36jsnf6e7e26376a7
//4d3abdd95amsh42b11a056be5dccp19703cjsn96a51d54275a
//3c3a7a1fa4msh0e92c078fd61424p137867jsnebb20098d172
async function buscarGoogle() {
  const buscar = document.getElementById("barraBuscar").value;
  const url = `https://google-search74.p.rapidapi.com/?query=${buscar}&limit=10&related_keywords=true`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "adaad128aemsh6cfb78feb6e838dp15a6d2jsn85a17c09c579",
      "X-RapidAPI-Host": "google-search74.p.rapidapi.com",
    },
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
			Search in Google
			</button>
		</div>
		<div class="col-lg-3"style="margin-top: 50px;width: 200px">
			<button type="button" class="btn btn" onclick="buscarImagenes()" id="btnBuscarImagenes" style="margin-left: 0px;padding-left: 0px;">
			search in images
			</button>
		</div>
		
	</div>
       <br>

	<div style="margin-left:30px;">
		<div class="row">
		<span>About ${numeroBusquedas} results</span>
		<hr>
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
    method: "GET",
    headers: {
     
      "X-RapidAPI-Key": "ab588c178fmsha19d835278e2e57p1d9b36jsnf6e7e26376a7",
      "X-RapidAPI-Host": "google-search72.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
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
			Search in Google
			</button>
		</div>
		<div class="col-lg-3"style="margin-top: 50px;width: 200px">
			<button type="button" class="btn btn" onclick="buscarImagenes()" id="btnBuscarImagenes" style="margin-left: 0px;padding-left: 0px;">
			search in images
			</button>
		</div>
		<br>
		
		<div class="row">
        <div class="col-lg-2">
		<div class="card" style="width: 18rem;">
		<img src="${result.items[0].thumbnailImageUrl}" class="card-img-top" alt="...">
		<div class="card-body">
		  <h5>${result.items[0].title}</h5>
		  <a href="${result.items[0].contextLink}" class="btn btn-primary">Picture Context</a>
		</div>
	  </div>

        </div>
        <div class="col-lg-2">
		<div class="card" style="width: 18rem;">
		<img src="${result.items[1].thumbnailImageUrl}" class="card-img-top" alt="...">
		<div class="card-body">
		  <h5 >${result.items[1].title}</h5>
		  <a href="${result.items[1].contextLink}" class="btn btn-primary">Picture Context</a>
		</div>
	  </div>
        </div>
        <div class="col-lg-2">
		<div class="card" style="width: 18rem;">
		<img src="${result.items[2].thumbnailImageUrl}" class="card-img-top" alt="...">
		<div class="card-body">
		  <h5 >${result.items[2].title}</h5>
		  <a href="${result.items[2].contextLink}" class="btn btn-primary">Picture Context</a>
		</div>
	  </div>
        </div>
        <div class="col-lg-2">
		<div class="card" style="width: 18rem;">
		<img src="${result.items[3].thumbnailImageUrl}" class="card-img-top" alt="...">
		<div class="card-body">
		  <h5>${result.items[3].title}</h5>
		  <a href="${result.items[3].contextLink}" class="btn btn-primary">Picture Context</a>
		</div>
	  </div>

        </div>
        <div class="col-lg-2">
		<div class="card" style="width: 18rem;">
		<img src="${result.items[4].thumbnailImageUrl}" class="card-img-top" alt="...">
		<div class="card-body">
		  <h5>${result.items[4].title}</h5>
		  <a href="${result.items[4].contextLink}" class="btn btn-primary">Picture Context</a>
		</div>
	  </div>

        </div>
        <div class="col-lg-2">
		<div class="card" style="width: 18rem;">
		<img src="${result.items[5].thumbnailImageUrl}" class="card-img-top" alt="...">
		<div class="card-body">
		  <h5>${result.items[5].title}</h5>
		  <a href="${result.items[5].contextLink}" class="btn btn-primary">Picture Context</a>
		</div>
	  </div>

        </div>
        <br>
		<br>
		<br>
		<br>
		<div class="row">
        <div class="col-lg-2">
		<div class="card" style="width: 18rem;">
		<img src="${result.items[6].thumbnailImageUrl}" class="card-img-top" alt="...">
		<div class="card-body">
		  <h5>${result.items[6].title}</h5>
		  <a href="${result.items[6].contextLink}" class="btn btn-primary">Picture Context</a>
		</div>
	  </div>

        </div>
        <div class="col-lg-2">
		<div class="card" style="width: 18rem;">
		<img src="${result.items[7].thumbnailImageUrl}" class="card-img-top" alt="...">
		<div class="card-body">
		  <h5>${result.items[7].title}</h5>
		  <a href="${result.items[7].contextLink}" class="btn btn-primary">Picture Context</a>
		</div>
	  </div>

        </div>
        <div class="col-lg-2">
		<div class="card" style="width: 18rem;">
		<img src="${result.items[8].thumbnailImageUrl}" class="card-img-top" alt="...">
		<div class="card-body">
		  <h5>${result.items[8].title}</h5>
		  <a href="${result.items[8].contextLink}" class="btn btn-primary">Picture Context</a>
		</div>
	  </div>

        </div>
        <div class="col-lg-2">
		<div class="card" style="width: 18rem;">
		<img src="${result.items[9].thumbnailImageUrl}" class="card-img-top" alt="...">
		<div class="card-body">
		  <h5>${result.items[9].title}</h5>
		  <a href="${result.items[9].contextLink}" class="btn btn-primary">Picture Context</a>
		</div>
	  </div>

        </div>
		</div>
    </div>`;
  } catch (error) {
    console.error(error);
  }
}

async function traductor() {
	const url = 'https://rapid-translate-multi-traduction.p.rapidapi.com/t';
    const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '282e8ded6amsh389b2ead7fe7657p11c32cjsn6b13b7ade005',
		'X-RapidAPI-Host': 'rapid-translate-multi-traduction.p.rapidapi.com'
	},
	body: {
		from: 'en',
		to: 'ar',
		q: 'Hello ! Rapid Translate Multi Traduction'
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


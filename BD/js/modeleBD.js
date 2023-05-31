var listAlbums = document.getElementById('listAlbums');

var infoAlbum = document.getElementById('infoAlbum');

//indique que mon code comportera du JQuery et dès que mon document est prêt alors je lance la fonction $
jQuery(document).ready(function ($) {
	//création const srcImg pour indiquer l'emplacement des images
	const srcImg = "images/";
	//création const albumDefaultMini qui sera utilisé si il n'y a pas d'image d'album mini
	const albumDefaultMini = srcImg + "noComicsMini.jpeg";
	//création const albumDefault qui sera utilisé si il n'y a pas d'image d'album
	const albumDefault = srcImg + "noComics.jpeg";
	//création const srcAlbumMini pour indiquer l'emplacement des images des albums mini
	const srcAlbumMini = "albumsMini/";
	//création const srcAlbum pour indiquer l'emplacement des images des albums
	const srcAlbum = "albums/";

	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	/*
	// Lecture d'un album
	console.log("Lecture d'un album");
	var album = albums.get("5");
	var serie = series.get(album.idSerie);
	var auteur = auteurs.get(album.idAuteur);
	console.log(album.titre+" "+serie.nom+" "+auteur.nom);
	*/

	/////////////////////////////////////////////////////////////////////LISTE DES ALBUMS//////////////////////////////////////////////////////////////////////////////////////
	let output = '';
	let output2 = '';
	albums.forEach(function (element, index) {
		let serie = series.get(element.idSerie);
		let nomFic = serie.nom + "-" + element.numero + "-" + element.titre;
		// Utilisation d'une expression régulière pour supprimer 
		// les caractères non autorisés dans les noms de fichiers : '!?.":$
		nomFic = nomFic.replace(/'|!|\?|\.|"|:|\$/g, "");
		let titreAlbum = element.titre;
		let auteur = auteurs.get(element.idAuteur);


		output +=
			`<div class="card">
				<div class="card-album">
				<h2 id="idAlbum"></h2>
				<img class="card-image" src="${srcAlbum + nomFic}.jpg"/>
				<h2 class="card-titre">Titre : </h2>
				<h3 class="card-titre">${titreAlbum}</h3>
				<h4 class="card-auteur">Auteur : </h4>
				<h5 class="card-auteur">${auteur.nom}</h5>
				<button id="openModal">+ d'infos sur "${titreAlbum}"</button>
				</div>
			</div>`

		if (titreAlbum == element.titre) {
			output2 +=
				`<div class="card">
			<div class="card-album">
			<h2 id="idAlbum"></h2>
			<img class="card-image" src="${srcAlbum + nomFic}.jpg"/>
			<h2 class="card-titre">Titre : </h2>
			<h3 class="card-titre">${titreAlbum}</h3>
			<h4 class="card-auteur">Auteur : </h4>
			<h5 class="card-auteur">${auteur.nom}</h5>
			</div>
		</div>`
		}
	})

	listAlbums.innerHTML = output;

	infoAlbum.innerHTML = output2;

	/////////////////////////////////////////////////////////////////////LISTE DES AUTEURS//////////////////////////////////////////////////////////////////////////////////////

	var listAuteurs = document.getElementById('listAuteurs');

	var auteur = document.getElementById('auteur');

	auteur.addEventListener("click", () => {
		listAuteurs.showauteurs();
	})
	
	let output3 = '';

	auteurs.forEach(function (element, index) {
		let auteur = element.nom;

		output3 +=
			`<div id="listAuteurs">
				<ul>
					<li>${auteur}</li>
				</ul>
			</div>`
	})

	listAuteurs.innerHTML = output3;

	/////////////////////////////////////////////////////////////////////INFOS ALBUM//////////////////////////////////////////////////////////////////////////////////////

	/*function infoAlbum() {
		console.log("Lecture d'un album");
		var album = albums.get("4");
		var serie = series.get(album.idSerie);
		var auteur = auteurs.get(album.idAuteur);
		console.log(album.titre + " " + serie.nom + " " + auteur.nom);
	}*/




	/////////////////////////////////////////////////////////////////////MODAL//////////////////////////////////////////////////////////////////////////////////////

	var modal = document.getElementById('modal');

	var openBtn = document.getElementById('openModal');

	var closeBtn = document.getElementById('closeModal');

	openBtn.addEventListener("click", () => {
		modal.showModal();
	})

	closeBtn.addEventListener("click", () => {
		modal.close();
	})



	/*
	console.log("Liste des albums par série");
	for(var [idSerie, serie] of series.entries()) {
		// Recherche des albums de la série
		for (var [idAlbum, album] of albums.entries()) {
			if (album.idSerie == idSerie) {
				console.log(serie.nom+", Album N°"+album.numero+" "+album.titre+", Auteur:"+auteurs.get(album.idAuteur).nom);
			}
		}
	    
	}
	*/

	/*
	console.log("Liste des albums par auteur");
	for(var [idAuteur, auteur] of auteurs.entries()) {
		// Recherche des albums de l'auteur
		for (var [idAlbum, album] of albums.entries()) {
			if (album.idAuteur == idAuteur) {
				console.log(auteur.nom+", Album N°"+album.numero+" "+album.titre+", Série:"+series.get(album.idSerie).nom);
			}
		}
	    
	}
	*/

	//////////////////////////////////////////////////////////////////////// Affichage des BD

	//création var textSerie lié à l'id 'serie' dans notre HTML
	var txtSerie = document.getElementById("serie");
	//création var textNumero lié à l'id 'numero' dans notre HTML
	var txtNumero = document.getElementById("numero");
	//création var textTitre lié à l'id 'titre' dans notre HTML
	var txtTitre = document.getElementById("titre");
	//création var textAuteur lié à l'id 'auteur' dans notre HTML
	var txtAuteur = document.getElementById("auteur");
	//création var textPrix lié à l'id 'prix' dans notre HTML
	var txtPrix = document.getElementById("prix");
	//création var imgAlbum lié à l'id 'album' dans notre HTML
	var imgAlbum = document.getElementById("album");
	//création var imgAlbumMini lié à l'id 'albumMini' dans notre HTML
	var imgAlbumMini = document.getElementsByClassName("card-image");

	//si problème avec notre image mini dans l'emplacement de l'image mini de l'album dans notre HTML donc addEventListener appel la fonction 'error'
	listAlbums.addEventListener("error", function () {
		prbImg(this)
	});

	//création var idAlbum lié à notre id 'idAlbum' de notre HTML
	var idAlbum = document.getElementsByClassName("idAlbum");
	//quand on sélectionnera l'id de notre album addEventListener appelera notre fonction lorsqu'un changement de la valeur sera réalisé par l'utilisateur dans notre menu HTLM
	idAlbum.addEventListener("change", function () {
		//appel de notre fonction 'getAlbum' par rapport à l'id d'album sélectionné par l'utilisateur
		getAlbum(this)
	});


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/**
	 * Récupération de l'album par son id et appel de 
	 * la fonction d'affichage
	 * 
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
	
	//????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
	 @param {number} num 
	 */

	//création de notre fonction 'getAlbum'(num) 
	function getAlbum(num) {

		//création var album qui prendra l'album correspondant à la valeur num dans notre liste d'albums
		var album = albums.get(num.value);

		//si notre album est indéfini alors toutes les infos concernant l'album seront = "" ou 0
		if (album === undefined) {
			txtSerie.value = "";
			txtNumero.value = "";
			txtTitre.value = "";
			txtAuteur.value = "";
			txtPrix.value = 0;
			//et donc tu appelera la fonction 'afficheAlbums pour ??????????????????????????????????????????????????????????????????????????????????????????????????????????
			afficheAlbums($("#albumMini"), $("#album"), albumDefaultMini, albumDefault);

			//sinon
		} else {

			//création var serie prendra la valeur de la serie correspondant à l'id serie de notre album qui se trouve dans le js des series 
			var serie = series.get(album.idSerie);
			//création var auteur prendra la valeur de l'auteur correspondant à l'id auteur de notre album qui se trouve dans le js des auteurs 
			var auteur = auteurs.get(album.idAuteur);

			//txtSerie.value prendra le nom
			txtSerie.value = serie.nom;
			//txtNumero.value prendra le numéro
			txtNumero.value = album.numero;
			//txtTitre.value prendra le titre
			txtTitre.value = album.titre;
			//txtAuteur.value prendra l'auteur
			txtAuteur.value = auteur.nom;
			//txtPrix.value prendra le prix
			txtPrix.value = album.prix;

			var nomFic = serie.nom + "-" + album.numero + "-" + album.titre;


			afficheAlbums(
				$("#albumMini"),
				$("#album"),
				srcAlbumMini + nomFic + ".jpg",
				srcAlbum + nomFic + ".jpg"
			);

		}
	}

	/**
	 * Affichage des images, les effets sont chainés et traités
	 * en file d'attente par jQuery d'où les "stop()) et "clearQueue()" 
	 * pour éviter l'accumulation d'effets si défilement rapide des albums.
	 * 
	 * @param {object jQuery} $albumMini 
	 * @param {object jQuery} $album 
	 * @param {string} nomFic 
	 * @param {string} nomFicBig 
	 */
	function afficheAlbums($albumMini, $album, nomFicMini, nomFic) {
		$album.stop(true, true).clearQueue().fadeOut(100, function () {
			$album.attr('src', nomFic);
			$albumMini.stop(true, true).clearQueue().fadeOut(150, function () {
				$albumMini.attr('src', nomFicMini);
				$albumMini.slideDown(200, function () {
					$album.slideDown(200);
				});
			})
		});


	}

	/**
	 * Affichage de l'image par défaut si le chargement de l'image de l'album
	 * ne s'est pas bien passé
	 * 
	 * @param {object HTML} element 
	 */
	function prbImg(element) {
		// console.log(element);
		if (element.id === "albumMini")
			element.src = albumDefaultMini;
		else element.src = albumDefault;

	}

});
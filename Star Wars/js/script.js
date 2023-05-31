var sectionMovie = document.getElementById('cardListMovie');



//contacte le serveur pour récupérer les infos de l'URL donnée
//fetch = aller chercher
fetch('https://swapi.dev/api/films/')
    //lorsque tu as fini de contacter le serveur, ALORS (THEN) montre moi de quoi il en retourne avec :
    //création d'une fonction (response) = 'response' étant la réponse à la requête demandée en l'occurence afficher les infos de mon fetch donc infos de mon URL 
    .then(function (response) {
        //je demande de me retourner la réponse de ma requête, response.json() indique que je veux la réponse qui se trouve dans mes données json
        return response.json();
    })

    //ALORS (THEN) création d'une fonction (data) = 'data' étant les données de mon json
    .then(function (data) {
        //afficher un console log 'request successful' avec les données récupérées
        console.log('Request successful', data);
        //création de ma variable 'films' qui prend le résultat de mes données
        let films = data.results;
        //afficher un console log de 'films' pour voir apparaitre mes données donc la liste des films
        console.log(films);
        //GET (OBTENIR-RECUPERER) Films(dans ma var films)
        getFilms(films);
    })

    //élément qui s'affiche en cas d'erreur
    //CATCH (ATTRAPER) création d'une fonction (erreur)
    .catch(function (error) {
        //afficher un console log 'request failed' en cas d'erreur
        console.log('Request failed', error)
    })

const getFilms = (films) => {
    console.log(films);

    let output = '';
    films.forEach(function (element, index) {
        let titleFilm = element.title;



        output +=
            `<div class='card-list-movie'>
        <h4 class='card-title'>Title : </h4>
        <h5 class='card-title'>${titleFilm}</h5>
    </div>`
    })

    sectionMovie.innerHTML = output;
}










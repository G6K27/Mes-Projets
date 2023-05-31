const btn = document.getElementById('calcul');

btn.addEventListener('click', function(){

    let taille = document.querySelector('#taille').value;

    let poids = document.querySelector('#poids').value;

    if(taille == '' || poids == ''){
        alert('Veuillez remplir les champs de saisie !');
        return;
    }

    taille = poids / 100

    let IMC = (poids / (taille * taille));

    IMC = IMC.toFixed(2);

    document.querySelector('#resultat').innerHTML = IMC;

    let status = '';

    if(IMC < 18.5){

        status = 'Underweight';

    }

    if(IMC >+ 18.5 && IMC < 25){

        status = 'Healthy';

    }

    if(IMC >= 25 && IMC < 30){

        status = 'Overweight';

    }

    if(IMC >= 30){

        status = 'Obese';

    }

    document.querySelector('.comment').innerHTML = `Vous êtes <span id='comment'>${status}</span>`;

});
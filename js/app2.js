var url = 'http://40ca7692.ngrok.io/api/v2/pokemon/ability/';

$('a[data-remote-pokemon="true"]').on('click', function(e) {
    e.preventDefault();
    $.ajax({
        url: $(this).attr('href'),
        method: 'get',
        success: loadPokemon
    });
});

function loadPokemon(pokemon) {
    people.push({
        firstName: pokemon.name,
        lastName: pokemon.stats[0].stat.name,
        secret: pokemon.abilities[0].ability.name
    });
}


// function getAllPokemon(data) {
//   $.each(data.results, function(i, pokemon) {
//     $.ajax({
//       url: pokemon.url,
//       method: 'get',
//       success: loadPokemon
//     });
//   });
//   setTimeout(function() {
//     listPeople();
//   }, 5000);
// }
$(document).on('click', 'a.select', handleSelectPokemonForm);

function handleSelectPokemonForm(ev) {
  ev.preventDefault();
  var li = $(ev.currentTarget).closest('li');
  var id = li.attr('data-id');
  selectPokemon(id);
}

function selectPokemon(pokemon) {
  people.push({
    name: pokemon.name,
    ability: pokemon.abilities[0].ability.name,
    stats: pokemon.stats[0].stat.name
  });
}

// $('a[data-remote-pokemon="true"]').on('click', function(e) {
//   e.preventDefault();
//   $.ajax({
//     url: $(this).attr('href'),
//     method: 'get',
//     success: loadPokemon
//   });
// });


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

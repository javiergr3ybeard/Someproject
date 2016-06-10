var url = 'https://40ca7692.ngrok.io/api/v2/pokemon/?limit=151'

var template = $('.template')
  .clone()
  .removeClass('template')
  .detach();

function loadPokemon(pokemons) {
  $.each(pokemons.results, function(i, pokemon) {
    addPokemon(pokemon);
  });
}

function addPokemon(pokemon) {
  var li = template.clone();
  li.find('.pokemon-name a')
    .text(pokemon.name)
    .attr('href', pokemon.url)

  li.attr('data-id', pokemon.id);
  $('#pokemonList').append(li);

}
$.get({
  url: url,
  success: loadPokemon
});

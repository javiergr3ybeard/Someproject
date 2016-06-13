$(document).foundation();

var url = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

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
    li.text(pokemon.name)
        .attr('value', pokemon.url);

    li.attr('data-id', pokemon.id);
    $('#pokeSearch').append(li);
}

function lookInBush(pokemon) {
  $.each(pokemon.forms, function(i, forms) {
    $('#pokeName').text(forms.name)
    $.each(pokemon.types, function(i, Type) {
      $('#pokeType1').text(Type.type.name)
      $.each(pokemon.abilities, function(i, ability) {
        $("#pokeAbility1").text(ability.ability.name)
      });
    });
  });
}


// function pokeType(pokemon) {
//     $.each(pokemon.types, function(i, Type) {
//       $('#pokeType1').text(Type.type.name)
//   });
// }

$('#pokeSearch').on('change', function(e) {
  e.preventDefault();
    var pokeUrl = $('#pokeSearch').val();
    $.get({
      url: pokeUrl,
      success: lookInBush.bind(this),
      // success: pokeType.bind(this)
    });
});

// $(document).on('click', 'a',function(e){
//     e.preventDefault();
//
//     var link = $(e.currentTarget);
//     $.get({
//       url: $(this).attr('href'),
//       success: attributes.bind(this)
//     });
//
// });

$.get({
    url: url,
    success: loadPokemon
});

'use strict';

let likeButtons = document.getElementsByTagName('button');
let characters = [];
let more = 2;

$("#more").click(function(){
  renderCharacters(more);
  more++;
})


function getCharacters(page){
  let url=`https://swapi.co/api/people/?page=${page}`;
  $.ajax(url, {
    method: 'get',
    dataType: 'json',
  })
    .then(response => {
      let newCharacters = [];
      response.results.forEach(characterData => {
        newCharacters.push({'name': characterData.name, 'id': characterData.url, 'likes': 0});
      })
      characters = newCharacters;
    })
}

function renderCharacters(page){
  getCharacters(page);
  let template = $("#character_template").html();
  console.log(template);
  let render = Handlebars.compile(template);
  console.log(characters[0]);
  characters.forEach(character => {
    let charDiv = render(character);
    console.log(render(character));
    $('main').append(charDiv);
  })
}

for (let i = 0; i < likeButtons.length; i++) {
  likeButtons[i].addEventListener('click', likeMe);
};

function likeMe(e) {
  let character = $(this).parent()[0];
  let counter = character.getElementsByTagName('span')[0];
  let count = parseInt(counter.textContent);
  count++;
  $(counter).text(count);
}
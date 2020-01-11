'use strict';

function Image(img) {
  this.url = img.image_url,
    this.title = img.title,
    this.description = img.description,
    this.keyword = img.keyword,
    this.horns = img.horns;
}

Image.allImages = [];
let keywords = [];
const imageHtml = $('#photo-template').html();

Image.options = function () {
  Image.allImages.forEach(value => {
    if (keywords.indexOf(value.keyword) > -1) {
      return value.keyword;
    } else {
      keywords.push(value.keyword);
    }
  });

  keywords.forEach(value => $('#filter').append(`<option id="option_${value}">${value}</option>`));
  
  $('#filter').on('change', (event) => {
    console.log(event.target.value);
    let option = event.target.value;
    $('div').hide();
    $(`.${option}`).show();
  });
};

Image.sorting = function () {  
  $('#sort').append('<option id = "horns">horns</option>');
  $('#sort').append('<option id = "title">title</option>');

  $('#sort').on('change', (event) => {
    Image.order(event.target.value);
    $('main').empty();
    Image.allImages.forEach(img => img.render());
  });
}

Image.order = function (order) {
  if (order === 'horns') {
    Image.allImages.sort((a, b) => a.horns - b.horns);
  } else if (order === 'title') {
    Image.allImages.sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    });
  }
};

Image.prototype.render = function () {
  $('main').append('<div class = "template"></div>');
  let imageTemplate = $('div[class = "template"]');
  imageTemplate.html(imageHtml);
  imageTemplate.find('h2').text(this.title);
  imageTemplate.find('h2').addClass('title');
  imageTemplate.find('img').attr('src', this.url);
  imageTemplate.find('p').text(this.description);
  imageTemplate.find('p').addClass('description');
  imageTemplate.removeClass('template');
  imageTemplate.addClass(this.keyword);
  imageTemplate.addClass('objects');
};

Image.readJson = (src) => {
  $.get(src, 'json')
    .then(data => {
      data.forEach(item => {
        Image.allImages.push(new Image(item));
      });
    })
    .then(() => Image.allImages.forEach(img => img.render()))
    .then(() => Image.options())
    .then(() => Image.sorting());
};

$(Image.readJson('./data/page-1.json'));

$('#page').append('<option id="1">1</option>');
$('#page').append('<option id="2">2</option>');

$('#page').on('change', (event) => {
  let page = event.target.value;
  if(page != 'default'){
    $('main').empty();
    $('#filter').empty();
    $('#sort').empty();
    Image.allImages = [];
    $(Image.readJson(`./data/page-${page}.json`));
  }
})



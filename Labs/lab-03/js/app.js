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
Image.prototype.options = function () {
  Image.allImages.forEach(value => {
    if (keywords.indexOf(value.keyword) > -1) {
    } else {
      keywords.push(value.keyword);
    };
  });

  keywords.forEach(value => $('#filter').append(`<option id="option_${value}">${value}</option>`));

  $('#filter').on('change', (event) => {
    console.log(event.target.value);
    let option = event.target.value;
    $('div').hide();
    $(`.${option}`).show();
  });
};
Image.prototype.sort = function (sortBy) {
  if (sortBy === 'title') {
    Image.allImages.sort((a, b) => a.title.length - b.title.length);

  }
}

Image.prototype.render = function () {
  $('main').append('<div class = "template"></div>');
  let imageTemplate = $('div[class = "template"]');
  let imageHtml = $('#photo-template').html();
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

Image.prototype.loadImages = function () {
  Image.allImages.forEach(img => img.render());
};


Image.readJson = () => {
  $.get('./data/page-1.json', 'json')
    .then(data => {
      data.forEach(item => {
        Image.allImages.push(new Image(item));
      });
    })
    .then(() => Image.allImages.sort((a, b) => a.horns - b.horns))
    .then(() => Image.allImages.forEach(img => img.render()))
    .then(() => Image.allImages[19].options());

};


$(Image.readJson());



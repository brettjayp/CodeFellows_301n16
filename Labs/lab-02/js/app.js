'use strict';



function Image(img) {
  this.url = img.image_url,
    this.title = img.title,
    this.description = img.description,
    this.keyWord = img.keyWord,
    this.horns = img.horns;
}

Image.allImages = [];

Image.prototype.render = function () {
  console.log('in render function');
  $('main').append('<div class = "template"></div>');
  let imageTemplate = $('div[class = "template"]');
  let imageHtml = $('#photo-template').html();
  imageTemplate.html(imageHtml);

  imageTemplate.find('h2').text(this.title);
  imageTemplate.find('img').attr('src', this.url);
  imageTemplate.find('p').text(this.description);
  imageTemplate.removeClass('template');
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
    .then(() => Image.allImages.forEach(img => img.render()))
};


$(Image.readJson());



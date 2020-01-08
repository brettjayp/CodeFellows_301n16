'use strict';

const data = $.get('../data/page-1.json', 'json');


function Image(img) {
  this.url = img.image_url,
    this.title = img.title,
    this.description = img.description,
    this.keyWord = img.keyWord,
    this.horns = img.horns;
}

Image.allImages = [];

Image.readJson = () => {
  $.get('../data/page-1.json', 'json')
    .then(data => {
      data.forEach(item => {
        Image.allImages.push(new Image(item));
      });
    });
};

Image.readJson();



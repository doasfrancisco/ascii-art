const asciify = require('asciify-image');

const options = {
  fit: 'box',
  width: 60,
  height: 40,
  color: false, // We'll apply color via CSS
};

asciify('public/flower.png', options, (err, asciified) => {
  if (err) {
    console.error('Error generating ASCII art:', err);
    return;
  }
  console.log(asciified);
});

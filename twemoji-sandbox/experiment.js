var twemoji = require('twemoji');

console.log('turtle:');
console.log(twemoji.parse('🐢'));

console.log('rabbit:');
console.log(twemoji.parse('🐇'));

console.log('multiple:');
console.log(twemoji.parse('👍🍰🐭🍵👆'));

console.log('multiple with text:');
console.log(twemoji.parse('thumbs up 👍 thumbs down 👎'));

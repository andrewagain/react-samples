var yargs = require('yargs');

var argv = yargs.boolean('meow-mix').argv;
console.log(argv.meowMix);
console.log('---');
console.log(argv);

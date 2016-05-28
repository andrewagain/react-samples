var autoprefixer = require('autoprefixer');
var postcss = require('postcss');

var css = `
.example {
  display: flex;
  font-size: 11px;
}
`;

[
  // Test with recent browsers
  ['last 2 version'],

  // Test with recent browsers + iOS 8
  ['last 2 version', 'iOS >= 8'],

  // Test with recent browsers by usage, plus iOS 8, no IE.
  // I discovered that 'not ie' is not allowed. You must set a version.
  // To disable IE entirely, use 'not ie >= 1'
  ['last 2 version', 'iOS >= 8', 'not ie >= 1'],

  // I discovered that disabling IE doesn't disable IE mobile.
  // To disable IE mobile, I added an extra query.
  ['last 2 version', 'iOS >= 8', 'not ie >= 1', 'not ie_mob >= 1'],
].forEach(function(query) {
  var plugin = autoprefixer({ browsers: query });
  postcss([ plugin ]).process(css).then(function (result) {
    result.warnings().forEach(function (warn) {
        console.warn(warn.toString());
    });
    console.log(query);
    console.log(result.css);
    console.log('\n');
  });
});

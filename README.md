# temperature

Note: in order to pass the tests, in the file package/index.js, you have to:
1. Replace in line 1 "module.exports.SCALES =" with "const"
2. Remove in line 6 "module.exports.Temperature ="

You have to do this because the tests are rendered in the browser, and the browser does not recognize NodeJS syntax, however, to upload the package to npm, the SCALES object and the class Temperture must be exported through NodeJS.

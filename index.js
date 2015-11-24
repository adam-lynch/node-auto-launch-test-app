var NwBuilder = require('nw-builder');
var nw = new NwBuilder({
    files: ['./*', './node_modules/**/**', '!./node_modules/nw-builder/**/**'],
    platforms: ['osx32', 'osx64', 'linux32', 'linux64'],
    version: '0.12.3',
    buildDir: 'output'
});

//Log stuff you want

nw.on('log',  console.log);

// Build returns a promise
nw.build().then(function () {
    console.log('all done!');
}).catch(function (error) {
    console.error(error);
});
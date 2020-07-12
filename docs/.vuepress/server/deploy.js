const process = require('child_process')
var spawn = require('child_process').spawn;

process.exec('./deploy.sh', (error,stdout, stderr) => {
    console.log(error,stdout);
},)

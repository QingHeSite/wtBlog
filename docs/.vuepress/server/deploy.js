const process = require('child_process')

process.exec('./deploy.sh', (error,stdout, stderr) => {
    console.log(error,stdout);
},)

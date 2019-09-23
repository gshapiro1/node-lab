const pwd=require('./pwd');
//pwd()

process.stdout.write('promot > \n')

process.stdin.on('data', (data) => {
     const cmd = data.toString().trim();
  pwd(cmd)

})

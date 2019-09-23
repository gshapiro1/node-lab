process.stdout.write('promot > \n')

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if(cmd === 'pwd'){
       console.log(process.cwd())
    }

    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt >')
})

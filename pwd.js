module.exports=function(cmd){

if(cmd === 'pwd'){
    console.log(process.cwd())
}
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt >')
}


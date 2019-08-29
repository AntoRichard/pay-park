const fs = require('fs');


const userdetails = [
    {name : 'jerry', password : 'abc@123'},
    {name : 'anto', password : 'helloworld'}
];

fs.writeFile('./public/data/Userdetails.json',JSON.stringify(userdetails),err=>{
    if(err) throw err;
    console.log('done');
})
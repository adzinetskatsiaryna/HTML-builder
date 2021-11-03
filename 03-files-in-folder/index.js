const fs = require('fs');
const path = require('path');
const folderWay = path.join(__dirname, '/secret-folder')

fs.readdir(folderWay, (err, data)=>{
    if (err){
        throw err
    }

   data.forEach(file=>{
       fs.stat(`${folderWay}/${file}`, (err, stats)=>{
           if(err){
               throw err
           }
           if(stats.isFile()){
               console.log(`${path.parse(file).name} - ${path.extname(file).slice(1)} - ${(+stats.size)/1000} kb`)
           }
       })
   })
    
})
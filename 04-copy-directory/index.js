const fs = require('fs');
const path = require('path');
const folderWay  = path.join(__dirname, 'files');
const folderWayCopy = path.join(__dirname, 'files-copy');

function copyDir(){
    fs.readdir(folderWay, { withFileTypes: true }, (err, data) => {
        if (err){
            throw err;
          };
        fs.mkdir('04-copy-directory/files-copy', { recursive: true }, (err) => {
          if (err){
               throw err
              };
        });       
        data.forEach((file) => {
          fs.readFile(`${folderWay}/${file.name}`, 'utf-8', (err, data) => {
            if (err) throw err;
            else {
              fs.writeFile(`${folderWayCopy}/${file.name}`, data, 'utf-8', (err) => {
                if (err) throw err;
              });
            }
          });
        });
      });     
}
copyDir()


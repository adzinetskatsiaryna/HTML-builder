const fs = require('fs');
const path = require('path');

const stylesWay = path.join(__dirname, '/styles');
const bundelWay = path.join(__dirname, 'project-dist', 'bundle.css');

fs.createWriteStream(bundelWay);

fs.readdir(stylesWay, (err,data)=>{
    if(err){
        throw err
    }
    data.forEach(file=>{
        fs.stat(`${stylesWay}/${file}`, (err, stats)=>{
            if(err){
                throw err.message
            }
            const stream = fs.createReadStream(`${stylesWay}/${file}`, 'utf8');
            if(stats.isFile() && path.extname(file) === '.css'){
                stream.on('readable', ()=>{
                    let style = stream.read()
                    if(style){
                        fs.appendFile(bundelWay, style, (err)=>{
                            if(err){
                                throw err
                            }
                        })
                    }
                })
            }
        })
    })
})
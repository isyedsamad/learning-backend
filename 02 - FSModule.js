const fs = require('fs');

// *! 1. writeFile - to write or create file
// fs.writeFile(filePath, data[options], callback fn)
fs.writeFile('fsModule/01-File.txt', 'hey how is everything?', (err) => {
    if(err) console.log(err);
    else console.log('done!');
})

// *! 2. appendFile - used to update the file with new data while keeping the data as it is.
// fs.appendFile(filePath, data[options], callback fn)

// 3. copyFile
// 4. rename
// 5. unlink
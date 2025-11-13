const fs = require('fs');

//! 1. writeFile - to write or create file
//* fs.writeFile(filePath, data[options], callback fn)
// fs.writeFile('fsModule/01File.txt', 'hey how is everything?', (err) => {
//     if(err) console.log(err);
//     else console.log('done!');
// })

//! 2. appendFile - used to update the file with new data while keeping the data as it is.
//* fs.appendFile(filePath, data[options], callback fn)
// fs.appendFile('fsModule/01File.txt', ' mai badhiya hu!', (err) => {
//     if(err) console.log(err);
//     else console.log('done with append!');
// })

//! 3. copyFile - to copy a file
//* fs.copyFile(filePath, newCopyFilePath, callback fn)
// fs.copyFile('fsModule/01-File.txt', 'fsModule/01-FileCopy2.txt', (err) => {
//     if(err) console.log(err);
//     else console.log('done with copyfile');
// })

//! 4. rename - to rename the file
//* fs.rename(oldName, newName, callback fn)
// fs.rename('fsModule/01File.txt', 'fsModule/01-File.txt', (err) => {
//     if(err) console.log(err);
//     else console.log('done with rename');
// })

//! 5. unlink - to delete file
//* fs.unlink(filePath, callback fn)
// fs.unlink('fsModule/01-FileCopy2.txt', (err) => {
//     if(err) console.log(err.message);
//     else console.log('done with unlink');
// })

//! 5. rmdir / rm - used to remove directory/folder
//* fs.rm(folderPath[, options], callback fn)
//todo: without options we can only delete empty dir
// fs.rmdir('./copy/', (err) => {
//     if(err) console.log(err.message);
//     else console.log('done with removing directory');
// })
//todo: add option object with { recursive: true } to delete file loaded directory!
// fs.rm('./copy/', { recursive: true }, (err) => {
//     if(err) console.log(err.message);
//     else console.log('done with removing directory');
// })
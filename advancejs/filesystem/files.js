/**
 *const filesOps = async() => {
  try {
    const data = await fsPromise.readFile(path.join(__dirname, 'files', 'lorem.txt'), {encoding: 'utf8'})
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
filesOps()
//The practice is to avoid callbacks and use promises to first read a file,
    then erite into it a new data. then append more data to the already existing data, then rename the file .
//to solve this we need using promises
// 1. readFile
//2:write the file
// 2. append data
// 3: rename file
// try - catch
 */
const fs = require('fs')
const fsPromise = require("fs").promises;

const path = require("path");



const write = async () =>{
    try {
        fs.writeFile(
            path.join(__dirname, "files.txt"),"I have written a file#️⃣",
            (err, data) => {
              if (err) throw err;
              console.log(`write was successful`);
            }
          );
    } catch (error) {
        console.log('could not write the file')
    }
}
write()

const display = async() => {
    try {
      const data = await fsPromise.readFile(path.join(__dirname, 'files.txt'), {encoding: 'utf8'})
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  display()

const append = async () =>{
    try {
        fs.appendFile(
            path.join(__dirname,  "files.txt"),
            "\nI have data in new line 😊😊",
            (err, data) => {
              if (err) throw err;
              console.log(`appending has been successful`);

              fs.rename(
                path.join(__dirname, "files.txt"),
                path.join(__dirname, "file2.txt"),
                (error, data) =>{
                    if(error){
                        console.log(error)
                    }
                }
              )
            })
    } catch (error) {
        console.log(error)
    }
}
append()

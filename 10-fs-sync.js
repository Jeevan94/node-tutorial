
const fs  = require('fs')

fs.readFile('./content/first.txt','utf-8',(err, result) => {
    if(err){
      console.log("error")
      return
    }
    const data1 = result

    fs.readFile('./content/first.txt','utf-8',(err, result) => {
    if(err){
      console.log("error")
      return
    }
    const data2 = result
    const data = data1 + ' ' + data2
    fs.writeFile('./content/third.txt',data, (err) => {
      if(err)
        console.log('error in writing')
    })
  })
})

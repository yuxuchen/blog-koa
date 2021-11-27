const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017'
const dbName = 'myblog'

mongoose.connect(`${url}/${dbName}`,{
    //configuration
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

//error
db.on('error', err => {
    console.error(err)
})

// //connect success
// db.once('open', ()=>{
//     console.log('mongoose connect success..')
// })

module.exports = mongoose
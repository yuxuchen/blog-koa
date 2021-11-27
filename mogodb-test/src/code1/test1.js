const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'
const dbName = 'myblog'

MongoClient.connect(
    url,
    {
        //configuration
        useUnifiedTopology: true
    },
    (err, client) =>{
        if(err){
            console.error('mongodb connect error', err)
            return
        }
        //if there is no error, means successfully connected
        console.log('mongodb connect success')

        //change to database (console `use myblog`)
        const db = client.db(dbName)

        //close connection
        client.close()
    }
)
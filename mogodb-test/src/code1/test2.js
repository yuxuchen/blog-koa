const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'
const dbName = 'myBlog'

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

        //use collections
        const usersCollection = db.collection('users')
        //insert
        // usersCollection.insertOne({
        //     username:'iris',
        //     password:'222',
        //     realname:'iris chen'
        // },(err, result) =>{
        //     if(err){
        //         console.error('users insert error', err)
        //         return
        //     }
        //     console.log(result)
        //     client.close()
        // })
        //update
        // usersCollection.updateOne(
        //     {username:'zhangzhang'}, //查询条件
        //     {$set:{realname:'zhangDD'}}, //修改内容，注意有set
        //     (err, result) =>{
        //         if(err){
        //             console.error('users update error', err)
        //             return
        //         }
        //         console.log(result)
        //         client.close()
        //     }
        // )
        //delete
        // usersCollection.deleteOne(
        //     {username:'iris'},
        //     (err, result) => {
        //         if(err){
        //             console.log('users delete error', err)
        //             return
        //         }
        //         console.log(result)
        //         client.close()
        //     }
        // )
        //query
        usersCollection.find().toArray((err, result) => {
            if(err){
                console.error('users find error', err)
                return
            }
            console.log(result)
            //close connection
            client.close()
        })
    }
)
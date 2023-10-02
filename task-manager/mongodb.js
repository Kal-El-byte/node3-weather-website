//CRUD Create Read Update Delete

const {MongoClient, ObjectId} = require('mongodb');
// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;


const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { monitorCommands: true}, (error, client) => {
    if(error){
        return console.log('Unable to connect');
    }

    const db = client.db(databaseName)
    // db.collection('users').find({age:10}).toArray((error, users) => {
    //     console.log(users)
    // });
    db.collection('tasks').findOne({ _id: new ObjectId('6516ca3056167e9c64ab9e24')}, (error, user) => {
        if(error){
            return console.log('Unable to find Data')
        }

        console.log(user)
    });
});
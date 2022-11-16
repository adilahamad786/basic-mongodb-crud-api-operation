const { MongoClient, ObjectId } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = "demo";

MongoClient.connect(connectionURL, { useNewUrlParser : true }, (error, client) => {
    if (error) {
        return console.log("Unable to connect to database!");
    }
    
    console.log("Connected Correctly!");

    const db = client.db(databaseName);

    // Basic of GUID -> Global Unique Id
    const id = new ObjectId();
    console.log(id); // id
    console.log(id.id) // id buffer info
    console.log(id.getTimestamp()); // get exact id generate timing
    console.log(id.toHexString()); // convert object into string

    // // Insert one collection inside the "demo" Database and "users" Collection
    // db.collection('users').insertOne({
    //     name : "Adil Ahamad",
    //     age : 21
    // }, (error, result) => {
    //     if (error)
    //         return console.log("Unable to insert data!");
    //     console.log(result);
    // });

    // // Insert one collection inside the "demo" Database and "users" Collection
    // db.collection('users').insertMany([
    //     {
    //         name : "Mohin Uddin",
    //         age : 22
    //     },
    //     {
    //         name : "Junaid Khan",
    //         age : 21
    //     }
    // ], (error, result) => {
    //     if (error)
    //         return console.log("Unable to insert document!"); 
    //     console.log(result);
    // });
});
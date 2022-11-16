const { MongoClient, ObjectId } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = "demo";

MongoClient.connect(connectionURL, { useNewUrlParser : true }, (error, client) => {
    if (error) {
        return console.log("Unable to connect to database!");
    }
    
    console.log("Connected Correctly!");

    const db = client.db(databaseName);

    // // Basic of GUID -> Global Unique Id
    // const id = new ObjectId();
    // console.log(id); // id
    // console.log(id.id) // id buffer info
    // console.log(id.getTimestamp()); // get exact id generate timing
    // console.log(id.toHexString()); // convert object into string

    // // Insert one Document inside the "users" Collection Which are present in "demo" Database.
    // db.collection('users').insertOne({
    //     name : "Adil Ahamad",
    //     age : 21
    // }, (error, result) => {
    //     if (error)
    //         return console.log("Unable to insert data!");
    //     console.log(result);
    // });

    // // Insert Multiple Document inside the "users" Collection Which are present in "demo" Database.
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

    // // Read one Document from the "users" Collection Which are present in "demo" Database.
    // db.collection('users').findOne({
    //     name : "Adil Ahamad"
    // }, (error, result) => {
    //     if (error)
    //         return console.log("Unable to find document.");
    //     console.log(result);
    // })

    // // find document in collection in database by id
    // db.collection('users').findOne({ _id : new ObjectId('6374fd35dc3a7d33b394a0b1') }, (error , result) => {
    //     if (error)
    //         return console.log("Unable to find Document");
    //     console.log(result);
    // })

    // // Read All Document from the "users" Collection Which are present in "demo" Database..
    // db.collection('users').find({}).toArray((error, result) => {
    //     if (error)
    //         return console.log("Unable to find documents!");
    //     console.log(result);
    // });

    // // Read Multiple Document from the "users" Collection Which are present in "demo" Database which ages is same.
    // db.collection('users').find({ age : 21 }).toArray((error, result) => {
    //     if (error)
    //         return console.log("Unable to find documents!");
    //     console.log(result);
    // });

    // // Read Multiple Document from the "users" Collection Which are present in "demo" Database and count.
    // db.collection('users').find({ age : 22 }).count((error, result) => {
    //     if (error)
    //         return console.log(error);
    //     console.log(result);
    // });

    // // Update a Document from the "users" Collection Which are present in "demo" Database.
    // db.collection('users').updateOne({
    //     _id : new ObjectId('637504e2efa1658329047c30')
    // }, {
    //     $set : {
    //         name : "Aman",
    //         age : 23
    //     }
    // }).then(result => {
    //     console.log(result);
    // }).catch(error => {
    //     console.log(error);
    // });

    // // Update Multiple Document (Increase age by 1) from the "users" Collection Which are present in "demo" Database.
    // db.collection('users').updateMany({
    //     age : 21
    // },{
    //     $inc : {
    //         age : 1
    //     }
    // }).then(result => {
    //     console.log(result);
    // }).catch(error => {
    //     console.log(error);
    // });

    // Delete a Document from the "users" Collection Which are present in "demo" Database.
    db.collection('users').deleteOne({
        name : "Babu"
    }).then(result => {
        console.log(result);
    }).catch(error => {
        console.log(error);
    });

});
const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.ATLAS_URI; //read in secret mongo url from .env

// Return user if passwords match, otherwise return an error
async function getUser(client, username, password) {
    const user = await client.db("WebSuDB").collection("User_Profile").findOne({ name: username });

    // Check if user actually exists 
    if(user) {
        if(user.password == password) {
            return user; 
        } else {
            return "Incorrect Password."; // Place holder for now, replace with better logic later
        }
    }
}

async function registerUser(client, username, userPassword) {
    const profileCollection = await client.db("WebSuDB").collection("User_Profile");
    const defaultScore = 0;

    if(checkUserExists(client, username)){
        console.log("error, user already exists");
        return; 
    }

    // Set up JSON object of user info
    const newUser = { 
        name: username, 
        password: userPassword, 
        high_score: defaultScore,
    }

    const result = profileCollection.insertOne(newUser);
    console.log(`New user created with the following id: ${result.insertedId}`);
}

// Find existing user 
async function checkUserExists(client, username){
     const result = await client.db("WebSuDB").collection("User_Profile").findOne({ name: username });
     
     if (result) { // Check if result queried is null or not. 
        return true; 
     } else {
        return false;
     }
}

// Update a users high score
async function updateUserHighScore(client, username, newScore){
    const originalUser = await client.db("WebSuDB").collection("User_Profile").findOne({ name: username });
    const updatedUser = originalUser; //safe copy 
    updatedUser.high_score = newScore; 
    const theUser = await client.db("WebSuDB").collection("User_Profile").updateOne({ name: username }, {$set: updatedUser});
}

// Add high score:
async function addHighScore(client, score, userName){
    const newHighScore = {
        name: userName,
        high_score: score,
    }

    const high_scores = await client.db("WebSuDB").collection("high_scores").insertOne(newHighScore);
}

// Get 5 High Scores:
async function get5HighScores(client){
    const high_scores = await client.db("WebSuDB").collection("high_scores");
    top5 = high_scores.find({}).sort({"high_score": -1}).limit(5).toArray();
    return top5;
}

async function main() {
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make new user
        //await registerUser(client, "me", "passwordpog");

        // Update the user score:
        //await updateUserHighScore(client, "TestUser", 900);

        // Simulate login
        //myUser = await getUser(client, "TestUser", "myPassword");

        //Add a new high score:
        //await addHighScore(client, 100, "GamingOsu");

        //Get top 5 High Scores:
        const top5 = await get5HighScores(client); 
        console.log(top5);


    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);

//Useful for node interaction with mongo: https://www.mongodb.com/developer/quickstart/node-crud-tutorial/

// npm install dotenv 

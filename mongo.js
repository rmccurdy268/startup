const {MongoClient} = require('mongodb');
const data = require('./listingData');
const uuid = require('uuid');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const colName= "listings";

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

async function main(){
    const client = new MongoClient(url);

}

function getUser(email) {
  return collection.findOne({ email: email });
}


async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await collection.insertOne(user);

  return user;
}
